const prisma = require("../libs/prisma");

/**
 * Membuat rating baru
 * @param {Object} data - Data rating yang akan dibuat
 * @returns {Promise<Object>} - Rating yang telah dibuat
 */
const createRating = async (data) => {
  try {
    const rating = await prisma.rating.create({
      data,
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });

    return rating;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan rating berdasarkan kode rating
 * @param {string} kd_rating - Kode rating
 * @returns {Promise<Object>} - Rating yang ditemukan
 */
const getRatingById = async (kd_rating) => {
  try {
    const rating = await prisma.rating.findUnique({
      where: {
        kd_rating,
      },
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });

    if (!rating) {
      throw new Error("Rating tidak ditemukan");
    }

    return rating;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan semua rating dengan filter opsional
 * @param {Object} filter - Filter untuk rating
 * @returns {Promise<Array>} - Daftar rating yang ditemukan
 */
const getAllRating = async (filter = {}) => {
  try {
    // Membangun kondisi where berdasarkan filter yang diberikan
    const where = {};

    if (filter.kd_rating) {
      where.kd_rating = filter.kd_rating;
    }

    if (filter.kd_pengumpulan_tugas) {
      where.kd_pengumpulan_tugas = filter.kd_pengumpulan_tugas;
    }

    if (filter.nilai) {
      where.nilai = filter.nilai;
    }

    const rating = await prisma.rating.findMany({
      where,
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return rating;
  } catch (error) {
    throw error;
  }
};

/**
 * Memperbarui rating berdasarkan kode rating
 * @param {string} kd_rating - Kode rating
 * @param {Object} data - Data rating yang akan diperbarui
 * @returns {Promise<Object>} - Rating yang telah diperbarui
 */
const updateRating = async (kd_rating, data) => {
  try {
    // Periksa apakah rating ada
    const existingRating = await prisma.rating.findUnique({
      where: {
        kd_rating,
      },
    });

    if (!existingRating) {
      throw new Error("Rating tidak ditemukan");
    }

    const updatedRating = await prisma.rating.update({
      where: {
        kd_rating,
      },
      data,
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });

    return updatedRating;
  } catch (error) {
    throw error;
  }
};

/**
 * Menghapus rating berdasarkan kode rating
 * @param {string} kd_rating - Kode rating
 * @returns {Promise<Object>} - Rating yang telah dihapus
 */
const deleteRating = async (kd_rating) => {
  try {
    // Periksa apakah rating ada
    const existingRating = await prisma.rating.findUnique({
      where: {
        kd_rating,
      },
    });

    if (!existingRating) {
      throw new Error("Rating tidak ditemukan");
    }

    const deletedRating = await prisma.rating.delete({
      where: {
        kd_rating,
      },
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });

    return deletedRating;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan rating berdasarkan kode pengumpulan tugas
 * @param {string} kd_pengumpulan_tugas - Kode pengumpulan tugas
 * @returns {Promise<Object>} - Rating yang ditemukan
 */
const getRatingByPengumpulanTugasId = async (kd_pengumpulan_tugas) => {
  try {
    const rating = await prisma.rating.findFirst({
      where: {
        kd_pengumpulan_tugas,
      },
      include: {
        pengumpulanTugas: {
          include: {
            tugas: true,
            user: true,
          },
        },
      },
    });

    if (!rating) {
      throw new Error("Rating tidak ditemukan");
    }

    return rating;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createRating,
  getRatingById,
  getAllRating,
  updateRating,
  deleteRating,
  getRatingByPengumpulanTugasId,
};