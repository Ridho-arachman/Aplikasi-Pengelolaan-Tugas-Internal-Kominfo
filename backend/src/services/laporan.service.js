const prisma = require("../libs/prisma");

/**
 * Membuat laporan baru
 * @param {Object} data - Data laporan yang akan dibuat
 * @returns {Promise<Object>} - Laporan yang telah dibuat
 */
const createLaporan = async (data) => {
  try {
    const laporan = await prisma.laporan.create({
      data,
    });

    return laporan;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan laporan berdasarkan kode laporan
 * @param {string} kd_laporan - Kode laporan
 * @returns {Promise<Object>} - Laporan yang ditemukan
 */
const getLaporanById = async (kd_laporan) => {
  try {
    const laporan = await prisma.laporan.findUnique({
      where: {
        kd_laporan,
      },
      include: {
        user: true,
      },
    });

    if (!laporan) {
      throw new Error("Laporan tidak ditemukan");
    }

    return laporan;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan semua laporan dengan filter opsional
 * @param {Object} filter - Filter untuk laporan
 * @returns {Promise<Array>} - Daftar laporan yang ditemukan
 */
const getAllLaporan = async (filter = {}) => {
  try {
    // Membangun kondisi where berdasarkan filter yang diberikan
    const where = {};

    if (filter.kd_laporan) {
      where.kd_laporan = filter.kd_laporan;
    }

    if (filter.judul_laporan) {
      where.judul_laporan = {
        contains: filter.judul_laporan,
      };
    }

    if (filter.user_nip) {
      where.user_nip = filter.user_nip;
    }

    const laporan = await prisma.laporan.findMany({
      where,
      include: {
        user: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return laporan;
  } catch (error) {
    throw error;
  }
};

/**
 * Memperbarui laporan berdasarkan kode laporan
 * @param {string} kd_laporan - Kode laporan
 * @param {Object} data - Data laporan yang akan diperbarui
 * @returns {Promise<Object>} - Laporan yang telah diperbarui
 */
const updateLaporan = async (kd_laporan, data) => {
  try {
    // Periksa apakah laporan ada
    const existingLaporan = await prisma.laporan.findUnique({
      where: {
        kd_laporan,
      },
    });

    if (!existingLaporan) {
      throw new Error("Laporan tidak ditemukan");
    }

    const updatedLaporan = await prisma.laporan.update({
      where: {
        kd_laporan,
      },
      data,
    });

    return updatedLaporan;
  } catch (error) {
    throw error;
  }
};

/**
 * Menghapus laporan berdasarkan kode laporan
 * @param {string} kd_laporan - Kode laporan
 * @returns {Promise<Object>} - Laporan yang telah dihapus
 */
const deleteLaporan = async (kd_laporan) => {
  try {
    // Periksa apakah laporan ada
    const existingLaporan = await prisma.laporan.findUnique({
      where: {
        kd_laporan,
      },
    });

    if (!existingLaporan) {
      throw new Error("Laporan tidak ditemukan");
    }

    const deletedLaporan = await prisma.laporan.delete({
      where: {
        kd_laporan,
      },
    });

    return deletedLaporan;
  } catch (error) {
    throw error;
  }
};

/**
 * Mendapatkan laporan berdasarkan NIP pengguna
 * @param {string} user_nip - NIP pengguna
 * @returns {Promise<Array>} - Daftar laporan yang ditemukan
 */
const getLaporanByUserNip = async (user_nip) => {
  try {
    const laporan = await prisma.laporan.findMany({
      where: {
        user_nip,
      },
      include: {
        user: {
          select: {
            nip: true,
            nama: true,
            jabatan: true,
          },
        },
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return laporan;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createLaporan,
  getLaporanById,
  getAllLaporan,
  updateLaporan,
  deleteLaporan,
  getLaporanByUserNip,
};
