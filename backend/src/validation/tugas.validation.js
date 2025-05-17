const { z } = require("zod");

// Definisi skema dasar yang dapat digunakan kembali
const baseFields = {
  kd_tugas: z
    .string({ message: "Kode Tugas harus berupa string" })
    .cuid("Kode Tugas tidak valid"),

  judul: z
    .string({ message: "Judul harus berupa string" })
    .trim()
    .min(1, "Judul harus diisi")
    .max(255, "Judul terlalu panjang"),

  deskripsi: z
    .string({ message: "Deskripsi harus berupa string" })
    .trim()
    .min(1, "Deskripsi harus diisi"),

  user_nip: z
    .string({ message: "NIP user harus berupa string" })
    .length(18, "NIP harus terdiri dari 18 karakter"),

  status: z.enum(["pending", "in_progress", "selesai", "dibatalkan"], {
    message: "Status tidak valid",
  }),

  deadline: z
    .string()
    .datetime({ message: "Format deadline tidak valid" })
    .or(z.date()),

  prioritas: z.enum(["tinggi", "sedang", "rendah"], {
    message: "Prioritas tidak valid",
  }),
};

// Skema untuk membuat tugas baru
const createTugasSchema = z.object({
  judul: baseFields.judul,
  deskripsi: baseFields.deskripsi,
  user_nip: baseFields.user_nip,
  status: baseFields.status.optional(),
  deadline: baseFields.deadline,
  prioritas: baseFields.prioritas,
});

// Skema untuk mendapatkan tugas berdasarkan kode
const getTugasSchema = z.object({
  kd_tugas: baseFields.kd_tugas,
});

// Skema untuk mendapatkan semua tugas dengan filter opsional
const getAllTugasSchema = z.object({
  kd_tugas: baseFields.kd_tugas.optional(),
  judul: baseFields.judul.optional(),
  user_nip: baseFields.user_nip.optional(),
  status: baseFields.status.optional(),
  prioritas: baseFields.prioritas.optional(),
});

// Skema untuk memperbarui tugas
const updateTugasSchema = z.object({
  kd_tugas: baseFields.kd_tugas,
  judul: baseFields.judul.optional(),
  deskripsi: baseFields.deskripsi.optional(),
  user_nip: baseFields.user_nip.optional(),
  status: baseFields.status.optional(),
  deadline: baseFields.deadline.optional(),
  prioritas: baseFields.prioritas.optional(),
});

// Skema untuk menghapus tugas
const deleteTugasSchema = z.object({
  kd_tugas: baseFields.kd_tugas,
});

module.exports = {
  createTugasSchema,
  getTugasSchema,
  updateTugasSchema,
  deleteTugasSchema,
  getAllTugasSchema,
};
