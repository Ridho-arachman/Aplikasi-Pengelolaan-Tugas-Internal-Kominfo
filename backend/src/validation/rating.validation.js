const { z } = require("zod");

// Definisi skema dasar yang dapat digunakan kembali
const baseFields = {
  kd_rating: z
    .string({ message: "Kode Rating harus berupa string" })
    .cuid("Kode Rating tidak valid"),

  kd_pengumpulan_tugas: z
    .string({ message: "Kode Pengumpulan Tugas harus berupa string" })
    .min(1, "Kode Pengumpulan Tugas harus diisi"),

  nilai: z
    .number({ message: "Nilai harus berupa angka" })
    .min(0, "Nilai minimal adalah 0")
    .max(100, "Nilai maksimal adalah 100"),

  komentar: z
    .string({ message: "Komentar harus berupa string" })
    .optional()
    .nullable(),
};

// Skema untuk membuat rating baru
const createRatingSchema = z.object({
  kd_pengumpulan_tugas: baseFields.kd_pengumpulan_tugas,
  nilai: baseFields.nilai,
  komentar: baseFields.komentar,
});

// Skema untuk mendapatkan rating berdasarkan kode
const getRatingSchema = z.object({
  kd_rating: baseFields.kd_rating,
});

// Skema untuk mendapatkan semua rating dengan filter opsional
const getAllRatingSchema = z.object({
  kd_rating: baseFields.kd_rating.optional(),
  kd_pengumpulan_tugas: baseFields.kd_pengumpulan_tugas.optional(),
  nilai: baseFields.nilai.optional(),
});

// Skema untuk memperbarui rating
const updateRatingSchema = z.object({
  kd_rating: baseFields.kd_rating,
  nilai: baseFields.nilai.optional(),
  komentar: baseFields.komentar,
});

// Skema untuk menghapus rating
const deleteRatingSchema = z.object({
  kd_rating: baseFields.kd_rating,
});

module.exports = {
  createRatingSchema,
  getRatingSchema,
  updateRatingSchema,
  deleteRatingSchema,
  getAllRatingSchema,
};