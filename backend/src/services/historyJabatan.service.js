const prisma = require("../libs/prisma");

/**
 * Membuat history jabatan baru
 * @param {Object} data - Data history jabatan
 * @returns {Promise<Object>} - History jabatan yang dibuat
 */
const createHistoryJabatan = async (data) => {
  return await prisma.historyJabatan.create({
    data,
    include: {
      user: true,
      jabatan: true,
    },
  });
};

/**
 * Mendapatkan history jabatan berdasarkan ID
 * @param {string} id - ID history jabatan
 * @returns {Promise<Object>} - History jabatan yang ditemukan
 */
const getHistoryJabatan = async (id) => {
  return await prisma.historyJabatan.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      jabatan: true,
    },
  });
};

/**
 * Mendapatkan semua history jabatan dengan filter opsional
 * @param {string} user_nip - NIP user (opsional)
 * @param {string} kd_jabatan - Kode jabatan (opsional)
 * @returns {Promise<Array>} - Daftar history jabatan
 */
const getAllHistoryJabatan = async (user_nip, kd_jabatan) => {
  const where = {};

  if (user_nip) {
    where.user_nip = user_nip;
  }

  if (kd_jabatan) {
    where.kd_jabatan = kd_jabatan;
  }

  return await prisma.historyJabatan.findMany({
    where,
    include: {
      user: true,
      jabatan: true,
    },
    orderBy: {
      tanggal_mulai: "desc",
    },
  });
};

/**
 * Memperbarui history jabatan
 * @param {string} id - ID history jabatan
 * @param {Object} data - Data yang akan diperbarui
 * @returns {Promise<Object>} - History jabatan yang diperbarui
 */
const updateHistoryJabatan = async (id, data) => {
  return await prisma.historyJabatan.update({
    where: {
      id,
    },
    data,
    include: {
      user: true,
      jabatan: true,
    },
  });
};

/**
 * Menghapus history jabatan
 * @param {string} id - ID history jabatan
 * @returns {Promise<Object>} - History jabatan yang dihapus
 */
const deleteHistoryJabatan = async (id) => {
  return await prisma.historyJabatan.delete({
    where: {
      id,
    },
    include: {
      user: true,
      jabatan: true,
    },
  });
};

module.exports = {
  createHistoryJabatan,
  getHistoryJabatan,
  getAllHistoryJabatan,
  updateHistoryJabatan,
  deleteHistoryJabatan,
};