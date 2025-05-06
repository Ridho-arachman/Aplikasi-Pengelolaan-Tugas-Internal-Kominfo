const prisma = require("../lib/prisma");

/**
 * Membuat jabatan baru
 * @param {Object} data - Data jabatan yang akan dibuat
 * @returns {Promise<Object>} Data jabatan yang berhasil dibuat
 */
const createJabatan = async (data) => {
  return await prisma.jabatan.create({ data });
};

/**
 * Mendapatkan jabatan berdasarkan kode jabatan
 * @param {string} kd_jabatan - Kode jabatan
 * @returns {Promise<Object|null>} Data jabatan atau null jika tidak ditemukan
 */
const getJabatan = async (kd_jabatan) => {
  return await prisma.jabatan.findUnique({
    where: { kd_jabatan },
  });
};

/**
 * Mendapatkan semua jabatan dengan filter opsional
 * @param {string} kd_jabatan - Filter berdasarkan kode jabatan (opsional)
 * @param {string} nama_jabatan - Filter berdasarkan nama jabatan (opsional)
 * @returns {Promise<Array>} Daftar jabatan yang sesuai dengan filter
 */
const getAllJabatan = async (kd_jabatan, nama_jabatan) => {
  if (kd_jabatan) {
    return await prisma.jabatan.findMany({ where: { kd_jabatan } });
  }

  if (nama_jabatan) {
    return await prisma.jabatan.findMany({ where: { nama_jabatan } });
  }

  return await prisma.jabatan.findMany();
};

/**
 * Memperbarui nama jabatan
 * @param {string} kd_jabatan - Kode jabatan yang akan diperbarui
 * @param {string} nama_jabatan - Nama jabatan baru
 * @returns {Promise<Object>} Data jabatan yang telah diperbarui
 */
const updateJabatan = async (kd_jabatan, nama_jabatan) => {
  return await prisma.jabatan.update({
    where: { kd_jabatan },
    data: { nama_jabatan },
  });
};

/**
 * Menghapus jabatan berdasarkan kode jabatan
 * @param {string} kd_jabatan - Kode jabatan yang akan dihapus
 * @returns {Promise<Object>} Data jabatan yang telah dihapus
 */
const deleteJabatan = async (kd_jabatan) => {
  return await prisma.jabatan.delete({
    where: { kd_jabatan },
  });
};

module.exports = {
  createJabatan,
  getAllJabatan,
  getJabatan,
  updateJabatan,
  deleteJabatan,
};
