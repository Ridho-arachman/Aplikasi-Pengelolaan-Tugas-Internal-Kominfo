const { Prisma } = require("../../generated/prisma");
const prisma = require("../libs/prisma");
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const {
  createLaporan,
  getLaporanById,
  getAllLaporan,
  updateLaporan,
  deleteLaporan,
  getLaporanByUserNip,
} = require("../services/laporan.service");

/**
 * Controller untuk membuat laporan baru
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const CreateLaporan = async (req, res) => {
  try {
    const { isi_laporan, judul_laporan } = req.body;
    const user_nip = req.user.nip;

    // Buat laporan baru
    const laporan = await createLaporan({
      isi_laporan,
      judul_laporan,
      user_nip,
    });

    // Jika ada file yang diupload, simpan informasi file
    if (req.files && req.files.length > 0) {
      const fileData = [];

      // Upload setiap file ke Cloudinary
      for (const file of req.files) {
        try {
          // Upload langsung ke Cloudinary
          const result = await cloudinary.uploader.upload(file.path, {
            folder: "aplikasi_kominfo/laporan/files",
            resource_type: "auto",
          });

          // Simpan informasi file
          fileData.push({
            kd_laporan: laporan.kd_laporan,
            file_path: result.secure_url,
            file_name: file.originalname,
            file_type: file.mimetype,
            file_size: file.size,
          });

          // Hapus file dari disk setelah berhasil diupload ke Cloudinary
          fs.unlinkSync(file.path);
        } catch (error) {
          console.error("Error uploading file to Cloudinary:", error);
          // Hapus file dari disk jika gagal upload ke Cloudinary
          fs.unlinkSync(file.path);
          throw new Error("Gagal mengupload file ke Cloudinary");
        }
      }

      // Simpan data file ke database
      if (fileData.length > 0) {
        await prisma.laporanFile.createMany({
          data: fileData,
        });
      }
    }

    // Ambil laporan dengan file yang terkait
    const laporanWithFiles = await prisma.laporan.findUnique({
      where: {
        kd_laporan: laporan.kd_laporan,
      },
      include: {
        files: true,
        user: true,
      },
    });

    return res.status(201).json({
      status: "success",
      message: "Laporan berhasil dibuat",
      data: laporanWithFiles,
    });
  } catch (error) {
    console.error("Error in CreateLaporan:", error);

    // Hapus file yang sudah diupload jika terjadi error
    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        try {
          fs.unlinkSync(file.path);
        } catch (err) {
          console.error("Error deleting file:", err);
        }
      });
    }

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2003":
          return res.status(400).json({
            status: "error",
            message: "User tidak ditemukan",
          });
        default:
          return res.status(400).json({
            status: "error",
            message: "Terjadi kesalahan saat menyimpan data",
          });
      }
    }

    return res.status(500).json({
      status: "error",
      message: error.message || "Terjadi kesalahan pada server",
    });
  }
};

/**
 * Controller untuk mendapatkan laporan berdasarkan kode
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const GetLaporan = async (req, res) => {
  const { kd_laporan } = req.params;

  try {
    const laporan = await getLaporanById(kd_laporan);

    return res.status(200).json({
      status: "success",
      message: "Laporan berhasil ditemukan",
      data: laporan,
    });
  } catch (error) {
    if (error.message === "Laporan tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Laporan tidak ditemukan",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk mendapatkan semua laporan
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const GetAllLaporan = async (req, res) => {
  try {
    const { kd_laporan, judul_laporan, user_nip } = req.query;

    const filter = {
      kd_laporan,
      judul_laporan,
      user_nip,
    };

    const laporan = await getAllLaporan(filter);

    if (laporan.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Tidak ada laporan yang ditemukan",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Daftar laporan berhasil ditemukan",
      data: laporan,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk memperbarui laporan
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const UpdateLaporan = async (req, res) => {
  try {
    const { kd_laporan } = req.params;
    const { isi_laporan, judul_laporan, user_nip } = req.body;

    // Persiapkan data untuk update
    const updateData = {};

    if (isi_laporan) updateData.isi_laporan = isi_laporan;
    if (judul_laporan) updateData.judul_laporan = judul_laporan;
    if (user_nip) updateData.user_nip = user_nip;

    const updatedLaporan = await updateLaporan(kd_laporan, updateData);

    return res.status(200).json({
      status: "success",
      message: "Laporan berhasil diperbarui",
      data: updatedLaporan,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2003":
          return res.status(400).json({
            status: "error",
            message: "User tidak ditemukan",
          });
        case "P2025":
          return res.status(404).json({
            status: "error",
            message: "Laporan tidak ditemukan",
          });
        default:
          break;
      }
    } else if (error.message === "Laporan tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Laporan tidak ditemukan",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk menghapus laporan
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const DeleteLaporan = async (req, res) => {
  try {
    const { kd_laporan } = req.params;

    const deletedLaporan = await deleteLaporan(kd_laporan);

    return res.status(200).json({
      status: "success",
      message: "Laporan berhasil dihapus",
      data: deletedLaporan,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2025":
          return res.status(404).json({
            status: "error",
            message: "Laporan tidak ditemukan",
          });
        default:
          break;
      }
    } else if (error.message === "Laporan tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Laporan tidak ditemukan",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk mendapatkan laporan berdasarkan NIP pengguna
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const GetLaporanByUserNip = async (req, res) => {
  try {
    const { user_nip } = req.params;

    const laporan = await getLaporanByUserNip(user_nip);

    if (laporan.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Tidak ada laporan yang ditemukan",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Daftar laporan berhasil ditemukan",
      data: laporan,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  CreateLaporan,
  GetLaporan,
  GetAllLaporan,
  UpdateLaporan,
  DeleteLaporan,
  GetLaporanByUserNip,
};
