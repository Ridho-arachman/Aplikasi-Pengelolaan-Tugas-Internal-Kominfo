const { z } = require("zod");

// Definisi skema dasar yang dapat digunakan kembali
const baseFields = {
  kd_pengumpulan_tugas: z
    .string({ message: "Kode Pengumpulan Tugas harus berupa string" })
    .cuid("Kode Pengumpulan Tugas tidak valid"),

  kd_tugas: z
    .string({ message: "Kode Tugas harus berupa string" })
    .min(1, "Kode Tugas harus diisi"),

  user_nip: z
    .string({ message: "NIP user harus berupa string" })
    .length(18, "NIP harus terdiri dari 18 karakter"),

  tanggal_pengumpulan: z
    .string()
    .datetime({ message: "Format tanggal pengumpulan tidak valid" })
    .or(z.date()),

  image: z
    .string({ message: "Image harus berupa string" })
    .min(1, "Image harus diisi")
    .optional(),

  file_path: z
    .string({ message: "Path file harus berupa string" })
    .min(1, "Path file harus diisi")
    .optional(),

  catatan: z
    .string({ message: "Catatan harus berupa string" })
    .min(1, "Catatan harus diisi"),

  status: z.enum(["menunggu", "disetujui", "revisi", "ditolak"], {
    message: "Status tidak valid",
  }),
};

// Skema untuk membuat pengumpulan tugas baru
const createPengumpulanTugasSchema = z.object({
  kd_tugas: baseFields.kd_tugas,
  user_nip: baseFields.user_nip,
  tanggal_pengumpulan: baseFields.tanggal_pengumpulan,
  image: baseFields.image,
  file_path: baseFields.file_path,
  catatan: baseFields.catatan,
  status: baseFields.status.optional(),
});

// Skema untuk mendapatkan pengumpulan tugas berdasarkan kode
const getPengumpulanTugasSchema = z.object({
  kd_pengumpulan_tugas: baseFields.kd_pengumpulan_tugas,
});

// Skema untuk mendapatkan semua pengumpulan tugas dengan filter opsional
const getAllPengumpulanTugasSchema = z.object({
  kd_pengumpulan_tugas: baseFields.kd_pengumpulan_tugas.optional(),
  kd_tugas: baseFields.kd_tugas.optional(),
  user_nip: baseFields.user_nip.optional(),
  status: baseFields.status.optional(),
});

// Skema untuk memperbarui pengumpulan tugas
const updatePengumpulanTugasSchema = z.object({
  kd_pengumpulan_tugas: baseFields.kd_pengumpulan_tugas,
  kd_tugas: baseFields.kd_tugas.optional(),
  user_nip: baseFields.user_nip.optional(),
  tanggal_pengumpulan: baseFields.tanggal_pengumpulan.optional(),
  image: baseFields.image.optional(),
  file_path: baseFields.file_path.optional(),
  catatan: baseFields.catatan.optional(),
  status: baseFields.status.optional(),
});

// Skema untuk menghapus pengumpulan tugas
const deletePengumpulanTugasSchema = z.object({
  kd_pengumpulan_tugas: baseFields.kd_pengumpulan_tugas,
});

module.exports = {
  createPengumpulanTugasSchema,
  getPengumpulanTugasSchema,
  updatePengumpulanTugasSchema,
  deletePengumpulanTugasSchema,
  getAllPengumpulanTugasSchema,
};
