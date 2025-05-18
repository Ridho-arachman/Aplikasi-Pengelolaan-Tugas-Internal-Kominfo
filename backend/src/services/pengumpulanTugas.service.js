const prisma = require("../libs/prisma");

/**
 * Membuat pengumpulan tugas baru
 * @param {Object} data - Data pengumpulan tugas yang akan dibuat
 * @returns {Promise<Object>} - Pengumpulan tugas yang telah dibuat
 */
const createPengumpulanTugas = async (data) => {
  try {
    const pengumpulanTugas = await prisma.pengumpulanTugas.create({
      data,
      include: {
        tugas: true,
        user: true,
      },
    });

    return pengumpulanTugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan pengumpulan tugas berdasarkan kode pengumpulan tugas
 * @param {string} kd_pengumpulan_tugas - Kode pengumpulan tugas
 * @returns {Promise<Object>} - Pengumpulan tugas yang ditemukan
 */
const getPengumpulanTugasById = async (kd_pengumpulan_tugas) => {
  try {
    const pengumpulanTugas = await prisma.pengumpulanTugas.findUnique({
      where: {
        kd_pengumpulan_tugas,
      },
      include: {
        tugas: true,
        user: true,
      },
    });

    if (!pengumpulanTugas) {
      throw new Error("Pengumpulan tugas tidak ditemukan");
    }

    return pengumpulanTugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan semua pengumpulan tugas dengan filter opsional
 * @param {Object} filter - Filter untuk pengumpulan tugas
 * @returns {Promise<Array>} - Daftar pengumpulan tugas yang ditemukan
 */
const getAllPengumpulanTugas = async (filter = {}) => {
  try {
    // Membangun kondisi where berdasarkan filter yang diberikan
    const where = {};

    if (filter.kd_pengumpulan_tugas) {
      where.kd_pengumpulan_tugas = filter.kd_pengumpulan_tugas;
    }

    if (filter.kd_tugas) {
      where.kd_tugas = filter.kd_tugas;
    }

    if (filter.user_nip) {
      where.user_nip = filter.user_nip;
    }

    if (filter.status) {
      where.status = filter.status;
    }

    const pengumpulanTugas = await prisma.pengumpulanTugas.findMany({
      where,
      include: {
        tugas: true,
        user: true,
      },
      orderBy: {
        tanggal_pengumpulan: "desc",
      },
    });

    return pengumpulanTugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Memperbarui pengumpulan tugas berdasarkan kode pengumpulan tugas
 * @param {string} kd_pengumpulan_tugas - Kode pengumpulan tugas
 * @param {Object} data - Data pengumpulan tugas yang akan diperbarui
 * @returns {Promise<Object>} - Pengumpulan tugas yang telah diperbarui
 */
const updatePengumpulanTugas = async (kd_pengumpulan_tugas, data) => {
  try {
    // Periksa apakah pengumpulan tugas ada
    const existingPengumpulanTugas = await prisma.pengumpulanTugas.findUnique({
      where: {
        kd_pengumpulan_tugas,
      },
    });

    if (!existingPengumpulanTugas) {
      throw new Error("Pengumpulan tugas tidak ditemukan");
    }

    const updatedPengumpulanTugas = await prisma.pengumpulanTugas.update({
      where: {
        kd_pengumpulan_tugas,
      },
      data,
      include: {
        tugas: true,
        user: true,
      },
    });

    return updatedPengumpulanTugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Menghapus pengumpulan tugas berdasarkan kode pengumpulan tugas
 * @param {string} kd_pengumpulan_tugas - Kode pengumpulan tugas
 * @returns {Promise<Object>} - Pengumpulan tugas yang telah dihapus
 */
const deletePengumpulanTugas = async (kd_pengumpulan_tugas) => {
  try {
    // Periksa apakah pengumpulan tugas ada
    const existingPengumpulanTugas = await prisma.pengumpulanTugas.findUnique({
      where: {
        kd_pengumpulan_tugas,
      },
    });

    if (!existingPengumpulanTugas) {
      throw new Error("Pengumpulan tugas tidak ditemukan");
    }

    const deletedPengumpulanTugas = await prisma.pengumpulanTugas.delete({
      where: {
        kd_pengumpulan_tugas,
      },
      include: {
        tugas: true,
        user: true,
      },
    });

    return deletedPengumpulanTugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan pengumpulan tugas berdasarkan kode tugas
 * @param {string} kd_tugas - Kode tugas
 * @returns {Promise<Array>} - Daftar pengumpulan tugas yang ditemukan
 */
const getPengumpulanTugasByTugasId = async (kd_tugas) => {
  try {
    const pengumpulanTugas = await prisma.pengumpulanTugas.findMany({
      where: {
        kd_tugas,
      },
      include: {
        tugas: true,
        user: true,
      },
      orderBy: {
        tanggal_pengumpulan: "desc",
      },
    });

    return pengumpulanTugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan pengumpulan tugas berdasarkan NIP pengguna
 * @param {string} user_nip - NIP pengguna
 * @returns {Promise<Array>} - Daftar pengumpulan tugas yang ditemukan
 */
const getPengumpulanTugasByUserNip = async (user_nip) => {
  try {
    const pengumpulanTugas = await prisma.pengumpulanTugas.findMany({
      where: {
        user_nip,
      },
      include: {
        tugas: true,
        user: true,
      },
      orderBy: {
        tanggal_pengumpulan: "desc",
      },
    });

    return pengumpulanTugas;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPengumpulanTugas,
  getPengumpulanTugasById,
  getAllPengumpulanTugas,
  updatePengumpulanTugas,
  deletePengumpulanTugas,
  getPengumpulanTugasByTugasId,
  getPengumpulanTugasByUserNip,
};