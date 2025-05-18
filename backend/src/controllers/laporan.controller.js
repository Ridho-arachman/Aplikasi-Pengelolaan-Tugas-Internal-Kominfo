const { Prisma } = require("../../generated/prisma");
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
    const { isi_laporan, judul_laporan, user_nip } = req.body;

    const laporan = await createLaporan({
      isi_laporan,
      judul_laporan,
      user_nip,
    });

    return res.status(201).json({
      status: "success",
      message: "Laporan berhasil dibuat",
      data: laporan,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2003":
          return res.status(400).json({
            status: "error",
            message: "User tidak ditemukan",
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
      message: error.message 
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

module.exports = {
  CreateLaporan,
  GetLaporan,
  GetAllLaporan,
  UpdateLaporan,
  DeleteLaporan,
};