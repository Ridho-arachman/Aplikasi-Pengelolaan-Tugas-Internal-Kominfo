const { z } = require("zod");

const userCreateSchema = z.object({
  nip: z.string().regex(/^\d{18}$/, "NIP harus terdiri dari 18 digit angka"),
  nama: z.string().min(1, "Nama harus diisi").max(255, "Nama terlalu panjang"),
  password: z
    .string()
    .min(1, "Password harus diisi")
    .max(255, "Password terlalu panjang"),
  role: z.enum(["user", "admin"]).optional(),
  kd_jabatan: z.string().cuid("Kode Jabatan tidak valid"),
  nip_atasan: z
    .string()
    .regex(/^\d{18}$/, "NIP harus terdiri dari 18 digit angka")
    .optional(),
});

module.exports = { userCreateSchema };
