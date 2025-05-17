const { Prisma } = require("../../generated/prisma");
const tugasService = require("../services/tugas.service");

/**
 * Controller untuk membuat tugas baru
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const CreateTugas = async (req, res) => {
  try {
    const { judul, deskripsi, user_nip, status, deadline, prioritas } =
      req.body;

    const tugas = await tugasService.createTugas({
      judul,
      deskripsi,
      user_nip,
      status,
      deadline: new Date(deadline),
      prioritas,
    });

    return res.status(201).json({
      status: "success",
      message: "Tugas berhasil dibuat",
      data: tugas,
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
 * Controller untuk mendapatkan tugas berdasarkan kode
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const GetTugas = async (req, res) => {
  const { kd_tugas } = req.params;
  
  try {
    const tugas = await tugasService.getTugasById(kd_tugas);

    return res.status(200).json({
      status: "success",
      message: "Tugas berhasil ditemukan",
      data: tugas,
    });
  } catch (error) {
    if (error.message === "Tugas tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Tugas tidak ditemukan",
      });
    }
    
    return res.status(500).json({ 
      status: "error", 
      message: error.message 
    });
  }
};

/**
 * Controller untuk mendapatkan semua tugas
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const GetAllTugas = async (req, res) => {
  try {
    const { kd_tugas, judul, user_nip, status, prioritas } = req.query;

    const filter = {
      kd_tugas,
      judul,
      user_nip,
      status,
      prioritas,
    };

    const tugas = await tugasService.getAllTugas(filter);

    if (tugas.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Tidak ada tugas yang ditemukan",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Daftar tugas berhasil ditemukan",
      data: tugas,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk memperbarui tugas
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const UpdateTugas = async (req, res) => {
  try {
    const { kd_tugas } = req.params;
    const { judul, deskripsi, user_nip, status, deadline, prioritas } =
      req.body;

    // Persiapkan data untuk update
    const updateData = {};

    if (judul) updateData.judul = judul;
    if (deskripsi) updateData.deskripsi = deskripsi;
    if (user_nip) updateData.user_nip = user_nip;
    if (status) updateData.status = status;
    if (deadline) updateData.deadline = new Date(deadline);
    if (prioritas) updateData.prioritas = prioritas;

    const updatedTugas = await tugasService.updateTugas(kd_tugas, updateData);

    return res.status(200).json({
      status: "success",
      message: "Tugas berhasil diperbarui",
      data: updatedTugas,
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
            message: "Tugas tidak ditemukan",
          });
        default:
          break;
      }
    } else if (error.message === "Tugas tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Tugas tidak ditemukan",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk menghapus tugas
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const DeleteTugas = async (req, res) => {
  try {
    const { kd_tugas } = req.params;

    const deletedTugas = await tugasService.deleteTugas(kd_tugas);

    return res.status(200).json({
      status: "success",
      message: "Tugas berhasil dihapus",
      data: deletedTugas,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2025":
          return res.status(404).json({
            status: "error",
            message: "Tugas tidak ditemukan",
          });
        default:
          break;
      }
    } else if (error.message === "Tugas tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Tugas tidak ditemukan",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  CreateTugas,
  GetTugas,
  GetAllTugas,
  UpdateTugas,
  DeleteTugas,
};
