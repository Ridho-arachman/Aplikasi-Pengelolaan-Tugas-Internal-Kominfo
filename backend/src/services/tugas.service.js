const prisma = require("../libs/prisma");

/**
 * Membuat tugas baru
 * @param {Object} data - Data tugas yang akan dibuat
 * @returns {Promise<Object>} - Tugas yang telah dibuat
 */
const createTugas = async (data) => {
  try {
    const tugas = await prisma.tugas.create({
      data,
    });

    return tugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan tugas berdasarkan kode tugas
 * @param {string} kd_tugas - Kode tugas
 * @returns {Promise<Object>} - Tugas yang ditemukan
 */
const getTugasById = async (kd_tugas) => {
  try {
    const tugas = await prisma.tugas.findUnique({
      where: {
        kd_tugas,
      },
      include: {
        user: true,
        pengumpulan_tugas: true,
      },
    });

    if (!tugas) {
      throw new Error("Tugas tidak ditemukan");
    }

    return tugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan semua tugas dengan filter opsional
 * @param {Object} filter - Filter untuk tugas
 * @returns {Promise<Array>} - Daftar tugas yang ditemukan
 */
const getAllTugas = async (filter = {}) => {
  try {
    // Membangun kondisi where berdasarkan filter yang diberikan
    const where = {};

    if (filter.kd_tugas) {
      where.kd_tugas = filter.kd_tugas;
    }

    if (filter.judul) {
      where.judul = {
        contains: filter.judul,
      };
    }

    if (filter.user_nip) {
      where.user_nip = filter.user_nip;
    }

    if (filter.status) {
      where.status = filter.status;
    }

    if (filter.prioritas) {
      where.prioritas = filter.prioritas;
    }

    const tugas = await prisma.tugas.findMany({
      where,
      include: {
        user: true,
        pengumpulan_tugas: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return tugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Memperbarui tugas berdasarkan kode tugas
 * @param {string} kd_tugas - Kode tugas
 * @param {Object} data - Data tugas yang akan diperbarui
 * @returns {Promise<Object>} - Tugas yang telah diperbarui
 */
const updateTugas = async (kd_tugas, data) => {
  try {
    // Periksa apakah tugas ada
    const existingTugas = await prisma.tugas.findUnique({
      where: {
        kd_tugas,
      },
    });

    if (!existingTugas) {
      throw new Error("Tugas tidak ditemukan");
    }

    const updatedTugas = await prisma.tugas.update({
      where: {
        kd_tugas,
      },
      data,
    });

    return updatedTugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Menghapus tugas berdasarkan kode tugas
 * @param {string} kd_tugas - Kode tugas
 * @returns {Promise<Object>} - Tugas yang telah dihapus
 */
const deleteTugas = async (kd_tugas) => {
  try {
    // Periksa apakah tugas ada
    const existingTugas = await prisma.tugas.findUnique({
      where: {
        kd_tugas,
      },
    });

    if (!existingTugas) {
      throw new Error("Tugas tidak ditemukan");
    }

    const deletedTugas = await prisma.tugas.delete({
      where: {
        kd_tugas,
      },
    });

    return deletedTugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan tugas berdasarkan NIP pengguna
 * @param {string} user_nip - NIP pengguna
 * @returns {Promise<Array>} - Daftar tugas yang ditemukan
 */
const getTugasByUserNip = async (user_nip) => {
  try {
    const tugas = await prisma.tugas.findMany({
      where: {
        user_nip,
      },
      include: {
        user: true,
        pengumpulan_tugas: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return tugas;
  } catch (error) {
    throw error;
  }
};

/**
 * Mengubah status tugas
 * @param {string} kd_tugas - Kode tugas
 * @param {string} status - Status baru
 * @returns {Promise<Object>} - Tugas yang telah diperbarui
 */
const updateStatusTugas = async (kd_tugas, status) => {
  try {
    // Periksa apakah tugas ada
    const existingTugas = await prisma.tugas.findUnique({
      where: {
        kd_tugas,
      },
    });

    if (!existingTugas) {
      throw new Error("Tugas tidak ditemukan");
    }

    const updatedTugas = await prisma.tugas.update({
      where: {
        kd_tugas,
      },
      data: {
        status,
      },
    });

    return updatedTugas;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTugas,
  getTugasById,
  getAllTugas,
  updateTugas,
  deleteTugas,
  getTugasByUserNip,
  updateStatusTugas,
};
