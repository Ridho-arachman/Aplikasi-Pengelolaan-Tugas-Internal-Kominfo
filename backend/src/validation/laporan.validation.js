const { z } = require("zod");

// Definisi skema dasar yang dapat digunakan kembali
const baseFields = {
  kd_laporan: z
    .string({ message: "Kode Laporan harus berupa string" })
    .cuid("Kode Laporan tidak valid"),

  isi_laporan: z
    .string({ message: "Isi Laporan harus berupa string" })
    .trim()
    .min(1, "Isi Laporan harus diisi"),

  judul_laporan: z
    .string({ message: "Judul Laporan harus berupa string" })
    .trim()
    .min(1, "Judul Laporan harus diisi")
    .max(255, "Judul Laporan terlalu panjang"),

  user_nip: z
    .string({ message: "NIP user harus berupa string" })
    .length(18, "NIP harus terdiri dari 18 karakter"),
};

// Skema untuk membuat laporan baru
const createLaporanSchema = z.object({
  isi_laporan: baseFields.isi_laporan,
  judul_laporan: baseFields.judul_laporan,
  user_nip: baseFields.user_nip,
});

// Skema untuk mendapatkan laporan berdasarkan kode
const getLaporanSchema = z.object({
  kd_laporan: baseFields.kd_laporan,
});

// Skema untuk mendapatkan semua laporan dengan filter opsional
const getAllLaporanSchema = z.object({
  kd_laporan: baseFields.kd_laporan.optional(),
  judul_laporan: baseFields.judul_laporan.optional(),
  user_nip: baseFields.user_nip.optional(),
});

// Skema untuk memperbarui laporan
const updateLaporanSchema = z.object({
  kd_laporan: baseFields.kd_laporan,
  isi_laporan: baseFields.isi_laporan.optional(),
  judul_laporan: baseFields.judul_laporan.optional(),
  user_nip: baseFields.user_nip.optional(),
});

// Skema untuk menghapus laporan
const deleteLaporanSchema = z.object({
  kd_laporan: baseFields.kd_laporan,
});

module.exports = {
  createLaporanSchema,
  getLaporanSchema,
  updateLaporanSchema,
  deleteLaporanSchema,
  getAllLaporanSchema,
};