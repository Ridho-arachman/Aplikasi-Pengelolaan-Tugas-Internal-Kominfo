const { Prisma } = require("../../generated/prisma");
const prisma = require("../libs/prisma");
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const {
  createPengumpulanTugas,
  getPengumpulanTugasById,
  getAllPengumpulanTugas,
  updatePengumpulanTugas,
  deletePengumpulanTugas,
  getPengumpulanTugasByTugasId,
  getPengumpulanTugasByUserNip,
} = require("../services/pengumpulanTugas.service");

/**
 * Controller untuk membuat pengumpulan tugas baru
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const CreatePengumpulanTugas = async (req, res) => {
  try {
    const { kd_tugas, catatan } = req.body;
    const user_nip = req.user.nip;
    const tanggal_pengumpulan = new Date();

    // Buat pengumpulan tugas baru
    const pengumpulanTugas = await createPengumpulanTugas({
      kd_tugas,
      user_nip,
      tanggal_pengumpulan,
      catatan,
      status: "menunggu",
    });

    // Jika ada file yang diupload, simpan informasi file
    if (req.files && req.files.length > 0) {
      const fileData = [];
      const imageData = [];

      // Upload setiap file ke Cloudinary
      for (const file of req.files) {
        try {
          // Upload ke Cloudinary
          const result = await cloudinary.uploader.upload(file.path, {
            folder: "aplikasi_kominfo/pengumpulan_tugas/files",
            resource_type: "auto",
          });

          // Tentukan apakah file adalah gambar atau dokumen
          const isImage = file.mimetype.startsWith("image/");

          if (isImage) {
            imageData.push({
              kd_pengumpulan_tugas: pengumpulanTugas.kd_pengumpulan_tugas,
              image_path: result.secure_url,
              image_name: file.originalname,
              image_type: file.mimetype,
              image_size: file.size,
            });
          } else {
            fileData.push({
              kd_pengumpulan_tugas: pengumpulanTugas.kd_pengumpulan_tugas,
              file_path: result.secure_url,
              file_name: file.originalname,
              file_type: file.mimetype,
              file_size: file.size,
            });
          }

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
        await prisma.pengumpulanTugasFile.createMany({
          data: fileData,
        });
      }

      // Simpan data gambar ke database
      if (imageData.length > 0) {
        await prisma.pengumpulanTugasImage.createMany({
          data: imageData,
        });
      }
    }

    // Ambil pengumpulan tugas dengan file yang terkait
    const pengumpulanTugasWithFiles = await prisma.pengumpulanTugas.findUnique({
      where: {
        kd_pengumpulan_tugas: pengumpulanTugas.kd_pengumpulan_tugas,
      },
      include: {
        files: true,
        images: true,
        tugas: true,
        user: {
          select: {
            nip: true,
            nama: true,
            jabatan: true,
          },
        },
      },
    });

    return res.status(201).json({
      status: "success",
      message: "Pengumpulan tugas berhasil dibuat",
      data: pengumpulanTugasWithFiles,
    });
  } catch (error) {
    console.error("Error in CreatePengumpulanTugas:", error);

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
            message: "Tugas atau user tidak ditemukan",
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
 * Controller untuk mendapatkan pengumpulan tugas berdasarkan kode
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const GetPengumpulanTugas = async (req, res) => {
  const { kd_pengumpulan_tugas } = req.params;

  try {
    const pengumpulanTugas =
      await pengumpulanTugasService.getPengumpulanTugasById(
        kd_pengumpulan_tugas
      );

    return res.status(200).json({
      status: "success",
      message: "Pengumpulan tugas berhasil ditemukan",
      data: pengumpulanTugas,
    });
  } catch (error) {
    if (error.message === "Pengumpulan tugas tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Pengumpulan tugas tidak ditemukan",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk mendapatkan semua pengumpulan tugas
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const GetAllPengumpulanTugas = async (req, res) => {
  try {
    const { kd_pengumpulan_tugas, kd_tugas, user_nip, status } = req.query;

    const filter = {
      kd_pengumpulan_tugas,
      kd_tugas,
      user_nip,
      status,
    };

    const pengumpulanTugas =
      await pengumpulanTugasService.getAllPengumpulanTugas(filter);

    if (pengumpulanTugas.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Tidak ada pengumpulan tugas yang ditemukan",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Daftar pengumpulan tugas berhasil ditemukan",
      data: pengumpulanTugas,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk memperbarui pengumpulan tugas
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const UpdatePengumpulanTugas = async (req, res) => {
  try {
    const { kd_pengumpulan_tugas } = req.params;
    const {
      kd_tugas,
      user_nip,
      tanggal_pengumpulan,
      image,
      file_path,
      catatan,
      status,
    } = req.body;

    // Persiapkan data untuk update
    const updateData = {};

    if (kd_tugas) updateData.kd_tugas = kd_tugas;
    if (user_nip) updateData.user_nip = user_nip;
    if (tanggal_pengumpulan)
      updateData.tanggal_pengumpulan = tanggal_pengumpulan;
    if (image) updateData.image = image;
    if (file_path) updateData.file_path = file_path;
    if (catatan) updateData.catatan = catatan;
    if (status) updateData.status = status;

    const updatedPengumpulanTugas =
      await pengumpulanTugasService.updatePengumpulanTugas(
        kd_pengumpulan_tugas,
        updateData
      );

    return res.status(200).json({
      status: "success",
      message: "Pengumpulan tugas berhasil diperbarui",
      data: updatedPengumpulanTugas,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2003":
          return res.status(400).json({
            status: "error",
            message: "Tugas atau user tidak ditemukan",
          });
        case "P2025":
          return res.status(404).json({
            status: "error",
            message: "Pengumpulan tugas tidak ditemukan",
          });
        default:
          break;
      }
    } else if (error.message === "Pengumpulan tugas tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Pengumpulan tugas tidak ditemukan",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk menghapus pengumpulan tugas
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const DeletePengumpulanTugas = async (req, res) => {
  try {
    const { kd_pengumpulan_tugas } = req.params;

    const deletedPengumpulanTugas =
      await pengumpulanTugasService.deletePengumpulanTugas(
        kd_pengumpulan_tugas
      );

    return res.status(200).json({
      status: "success",
      message: "Pengumpulan tugas berhasil dihapus",
      data: deletedPengumpulanTugas,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2025":
          return res.status(404).json({
            status: "error",
            message: "Pengumpulan tugas tidak ditemukan",
          });
        default:
          break;
      }
    } else if (error.message === "Pengumpulan tugas tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Pengumpulan tugas tidak ditemukan",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  CreatePengumpulanTugas,
  GetPengumpulanTugas,
  GetAllPengumpulanTugas,
  UpdatePengumpulanTugas,
  DeletePengumpulanTugas,
};
