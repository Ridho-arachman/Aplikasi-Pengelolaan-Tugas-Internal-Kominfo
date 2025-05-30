const { z } = require("zod");

// Definisi skema dasar yang dapat digunakan kembali
const baseFields = {
  kd_jabatan: z
    .string({ message: "Kode Jabatan harus berupa string" })
    .cuid("Kode Jabatan tidak valid"),

  nama_jabatan: z
    .string({ message: "Nama Jabatan harus berupa string" })
    .trim()
    .min(1, "Nama Jabatan harus diisi")
    .max(255, "Nama Jabatan terlalu panjang"),
};

// Skema untuk membuat jabatan baru
const createJabatanSchema = z.object({
  nama_jabatan: baseFields.nama_jabatan,
});

// Skema untuk mendapatkan jabatan berdasarkan kode
const getJabatanSchema = z.object({
  kd_jabatan: baseFields.kd_jabatan,
});

// Skema untuk mendapatkan semua jabatan dengan filter opsional
const getAllJabatanSchema = z.object({
  kd_jabatan: baseFields.kd_jabatan.optional(),
  nama_jabatan: baseFields.nama_jabatan.optional(),
});

// Skema untuk memperbarui jabatan
const updateJabatanSchema = z.object({
  kd_jabatan: baseFields.kd_jabatan,
  nama_jabatan: baseFields.nama_jabatan,
});

// Skema untuk menghapus jabatan
const deleteJabatanSchema = z.object({
  kd_jabatan: baseFields.kd_jabatan,
});

module.exports = {
  createJabatanSchema,
  getJabatanSchema,
  updateJabatanSchema,
  deleteJabatanSchema,
  getAllJabatanSchema,
};
