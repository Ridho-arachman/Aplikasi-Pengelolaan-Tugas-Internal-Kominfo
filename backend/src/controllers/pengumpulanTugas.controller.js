const { Prisma } = require("../../generated/prisma");
const pengumpulanTugasService = require("../services/pengumpulanTugas.service");

/**
 * Controller untuk membuat pengumpulan tugas baru
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const CreatePengumpulanTugas = async (req, res) => {
  try {
    const {
      kd_tugas,
      user_nip,
      tanggal_pengumpulan,
      image,
      file_path,
      catatan,
      status,
    } = req.body;

    const pengumpulanTugas =
      await pengumpulanTugasService.createPengumpulanTugas({
        kd_tugas,
        user_nip,
        tanggal_pengumpulan,
        image,
        file_path,
        catatan,
        status,
      });

    return res.status(201).json({
      status: "success",
      message: "Pengumpulan tugas berhasil dibuat",
      data: pengumpulanTugas,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2003":
          return res.status(400).json({
            status: "error",
            message: "Tugas atau user tidak ditemukan",
          });
        default:
          break;
      }
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
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
