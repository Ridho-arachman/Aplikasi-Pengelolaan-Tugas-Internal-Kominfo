const { z } = require("zod");

const createJabatanSchema = z.object({
  nama_jabatan: z
    .string({ message: "Nama Jabatan harus berupa string" })
    .trim()
    .min(1, "Nama Jabatan harus diisi")
    .max(255, "Nama Jabatan terlalu panjang"),
});

const getJabatanSchema = z.object({
  kd_jabatan: z
    .string("Kode Jabatan harus berupa string")
    .cuid("Kode Jabatan tidak valid"),
});

const getAllJabatanSchema = z.object({
  kd_jabatan: z
    .string("Kode Jabatan harus berupa string")
    .cuid("Kode Jabatan tidak valid")
    .optional(),
  nama_jabatan: z
    .string("Nama Jabatan harus berupa string")
    .trim()
    .min(1, "Nama Jabatan harus diisi")
    .max(255, "Nama Jabatan terlalu panjang")
    .optional(),
});

const updateJabatanSchema = z.object({
  kd_jabatan: z
    .string("Kode Jabatan harus berupa string")
    .cuid("Kode Jabatan tidak valid"),
  nama_jabatan: z
    .string("Nama Jabatan harus berupa string")
    .trim()
    .min(1, "Nama Jabatan harus diisi")
    .max(255, "Nama Jabatan terlalu panjang"),
});

const deleteJabatanSchema = z.object({
  kd_jabatan: z
    .string("Kode Jabatan harus berupa string")
    .cuid("Kode Jabatan tidak valid"),
});

module.exports = {
  createJabatanSchema,
  getJabatanSchema,
  updateJabatanSchema,
  deleteJabatanSchema,
  getAllJabatanSchema,
};
