const { z } = require("zod");

// Definisi skema dasar yang dapat digunakan kembali
const baseFields = {
  nip: z.string().min(18).max(18).trim(),
  nama: z.string().min(3).max(50).trim(),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password harus memiliki minimal 8 karakter." })
    .max(50, { message: "Password tidak boleh lebih dari 50 karakter." })
    .regex(/^(?=.*[a-z])/, {
      message: "Password harus mengandung setidaknya satu huruf kecil.",
    })
    .regex(/^(?=.*[A-Z])/, {
      message: "Password harus mengandung setidaknya satu huruf besar.",
    })
    .regex(/^(?=.*\d)/, {
      message: "Password harus mengandung setidaknya satu angka.",
    })
    .regex(/^(?=.*[@$!%*?&])/, {
      message: "Password harus mengandung setidaknya satu karakter khusus.",
    }),
  role: z.enum(["admin", "user"]),
  kd_jabatan: z.string().min(1).max(50),
  nip_atasan: z.string().min(18).max(18),
};

// Skema untuk membuat jabatan baru
const createUserSchema = z.object({
  nip: baseFields.nip,
  nama: baseFields.nama,
  password: baseFields.password,
  role: baseFields.role,
  kd_jabatan: baseFields.kd_jabatan,
  nip_atasan: baseFields.nip_atasan.optional(),
});

// Skema untuk mendapatkan jabatan berdasarkan kode
const getUserSchema = z.object({
  nip: baseFields.nip,
});

// Skema untuk mendapatkan semua jabatan dengan filter opsional
const getAllUserSchema = z.object({
  nip: baseFields.nip.optional(),
  nama: baseFields.nama.optional(),
  role: baseFields.role.optional(),
  kd_jabatan: baseFields.kd_jabatan.optional(),
  nip_atasan: baseFields.nip_atasan.optional(),
});

// Skema untuk memperbarui jabatan
const updateUserSchema = z.object({
  nip: baseFields.nip,
  nama: baseFields.nama,
  password: baseFields.password,
  role: baseFields.role,
  kd_jabatan: baseFields.kd_jabatan,
  nip_atasan: baseFields.nip_atasan.optional(),
});

// Skema untuk menghapus jabatan
const deleteUserSchema = z.object({
  nip: baseFields.nip,
});

module.exports = {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
  deleteUserSchema,
  getAllUserSchema,
};
