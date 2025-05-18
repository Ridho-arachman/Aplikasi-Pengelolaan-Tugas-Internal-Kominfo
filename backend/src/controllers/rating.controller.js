const { Prisma } = require("../../generated/prisma");
const {
  createRating,
  getRatingById,
  getAllRating,
  updateRating,
  deleteRating,
  getRatingByPengumpulanTugasId,
} = require("../services/rating.service");

/**
 * Controller untuk membuat rating baru
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const CreateRating = async (req, res) => {
  try {
    const { kd_pengumpulan_tugas, nilai, komentar } = req.body;

    // Pastikan nilai adalah angka
    const nilaiNumber = parseFloat(nilai);

    const rating = await createRating({
      kd_pengumpulan_tugas,
      nilai: nilaiNumber,
      komentar,
    });

    return res.status(201).json({
      status: "success",
      message: "Rating berhasil dibuat",
      data: rating,
    });
  } catch (error) {
    console.error("Error pada CreateRating:", error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2003":
          return res.status(400).json({
            status: "error",
            message: "Pengumpulan tugas tidak ditemukan",
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
 * Controller untuk mendapatkan rating berdasarkan kode
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const GetRating = async (req, res) => {
  const { kd_rating } = req.params;

  try {
    const rating = await getRatingById(kd_rating);

    return res.status(200).json({
      status: "success",
      message: "Rating berhasil ditemukan",
      data: rating,
    });
  } catch (error) {
    console.error("Error pada GetRating:", error);

    if (error.message === "Rating tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Rating tidak ditemukan",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk mendapatkan semua rating
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const GetAllRating = async (req, res) => {
  try {
    const { kd_rating, kd_pengumpulan_tugas, nilai } = req.query;

    const filter = {
      kd_rating,
      kd_pengumpulan_tugas,
      nilai: nilai ? parseFloat(nilai) : undefined,
    };

    const rating = await getAllRating(filter);

    if (rating.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Tidak ada rating yang ditemukan",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Daftar rating berhasil ditemukan",
      data: rating,
    });
  } catch (error) {
    console.error("Error pada GetAllRating:", error);

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk memperbarui rating
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const UpdateRating = async (req, res) => {
  try {
    const { kd_rating } = req.params;
    const { nilai, komentar } = req.body;

    // Persiapkan data untuk update
    const updateData = {};

    if (nilai !== undefined) updateData.nilai = nilai;
    if (komentar !== undefined) updateData.komentar = komentar;

    const updatedRating = await updateRating(kd_rating, updateData);

    return res.status(200).json({
      status: "success",
      message: "Rating berhasil diperbarui",
      data: updatedRating,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2025":
          return res.status(404).json({
            status: "error",
            message: "Rating tidak ditemukan",
          });
        default:
          break;
      }
    } else if (error.message === "Rating tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Rating tidak ditemukan",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk menghapus rating
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const DeleteRating = async (req, res) => {
  try {
    const { kd_rating } = req.params;

    const deletedRating = await deleteRating(kd_rating);

    return res.status(200).json({
      status: "success",
      message: "Rating berhasil dihapus",
      data: deletedRating,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2025":
          return res.status(404).json({
            status: "error",
            message: "Rating tidak ditemukan",
          });
        default:
          break;
      }
    } else if (error.message === "Rating tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Rating tidak ditemukan",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Controller untuk mendapatkan rating berdasarkan kode pengumpulan tugas
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @returns {Object} Response JSON
 */
const GetRatingByPengumpulanTugas = async (req, res) => {
  try {
    const { kd_pengumpulan_tugas } = req.params;

    const rating = await getRatingByPengumpulanTugasId(kd_pengumpulan_tugas);

    return res.status(200).json({
      status: "success",
      message: "Rating berhasil ditemukan",
      data: rating,
    });
  } catch (error) {
    console.error("Error pada GetRatingByPengumpulanTugas:", error);

    if (error.message === "Rating tidak ditemukan") {
      return res.status(404).json({
        status: "error",
        message: "Rating tidak ditemukan untuk pengumpulan tugas ini",
      });
    }

    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  CreateRating,
  GetRating,
  GetAllRating,
  UpdateRating,
  DeleteRating,
  GetRatingByPengumpulanTugas,
};
