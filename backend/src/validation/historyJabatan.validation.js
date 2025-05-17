const { z } = require("zod");

// Skema untuk membuat history jabatan
const createHistoryJabatanSchema = z.object({
  user_nip: z.string().min(1, "NIP user harus diisi"),
  kd_jabatan: z.string().min(1, "Kode jabatan harus diisi"),
  tanggal_mulai: z.string().datetime({ message: "Format tanggal mulai tidak valid" }),
  tanggal_akhir: z.string().datetime({ message: "Format tanggal akhir tidak valid" }).nullable().optional(),
});

// Skema untuk mendapatkan history jabatan berdasarkan ID
const getHistoryJabatanSchema = z.object({
  id: z.string().min(1, "ID history jabatan harus diisi"),
});

// Skema untuk mendapatkan semua history jabatan
const getAllHistoryJabatanSchema = z.object({
  user_nip: z.string().optional(),
  kd_jabatan: z.string().optional(),
});

// Skema untuk memperbarui history jabatan
const updateHistoryJabatanSchema = z.object({
  id: z.string().min(1, "ID history jabatan harus diisi"),
  user_nip: z.string().min(1, "NIP user harus diisi").optional(),
  kd_jabatan: z.string().min(1, "Kode jabatan harus diisi").optional(),
  tanggal_mulai: z.string().datetime({ message: "Format tanggal mulai tidak valid" }).optional(),
  tanggal_akhir: z.string().datetime({ message: "Format tanggal akhir tidak valid" }).nullable().optional(),
});

// Skema untuk menghapus history jabatan
const deleteHistoryJabatanSchema = z.object({
  id: z.string().min(1, "ID history jabatan harus diisi"),
});

module.exports = {
  createHistoryJabatanSchema,
  getHistoryJabatanSchema,
  getAllHistoryJabatanSchema,
  updateHistoryJabatanSchema,
  deleteHistoryJabatanSchema,
};