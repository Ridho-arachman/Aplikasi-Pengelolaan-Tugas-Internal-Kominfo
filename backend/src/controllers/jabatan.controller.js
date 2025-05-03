const { Prisma } = require("../../generated/prisma");
const jabatanServices = require("../services/jabatan.service");

const CreateJabatan = async (req, res) => {
  try {
    const data = await jabatanServices.createJabatan(req.body); // Pastikan Anda menggunakan async/await atau promise jika diperlukan
    return res.status(201).json({
      status: "success",
      message: "Jabatan berhasil dibuat",
      data,
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
        case "P2002":
          return res
            .status(400)
            .json({ status: "error", message: "Jabatan sudah ada" });
        default:
          break;
      }
    }
    return res.status(500).json({ status: "error", message: err.message });
  }
};

const GetJabatan = async (req, res) => {
  const { kd_jabatan } = req.params;
  try {
    const data = await jabatanServices.getJabatan(kd_jabatan);

    if (!data)
      return res
        .status(404)
        .json({ status: "failed", message: "Jabatan tidak ditemukan" });

    return res.json({ status: "success", data });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const GetAllJabatan = async (req, res) => {
  const { kd_jabatan, nama_jabatan } = req.query;
  const data = await jabatanServices.getAllJabatan(kd_jabatan, nama_jabatan);
  if (data.length === 0)
    return res
      .status(404)
      .json({ status: "failed", message: "Jabatan belum ada" });

  try {
    return res.json({ status: "success", data });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

const UpdateJabatan = async (req, res) => {
  const { kd_jabatan } = req.params;
  const { nama_jabatan } = req.body;
  try {
    const data = await jabatanServices.updateJabatan(kd_jabatan, nama_jabatan);
    return res.status(201).json({
      status: "success",
      message: "User berhasil diupdate",
      data,
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
        case "P2002":
          return res
            .status(400)
            .json({ status: "error", message: "Nama jabatan sudah ada" });
        case "P2003":
          return res
            .status(400)
            .json({ status: "error", message: "Kode Jabatan tidak valid" });
        case "P2025":
          return res
            .status(400)
            .json({ status: "error", message: "Jabatan tidak ditemukan" });
        default:
          break;
      }
    }
    return res.status(500).json({ status: "error", message: err.message });
  }
};

const DeleteJabatan = async (req, res) => {
  const { kd_jabatan } = req.params;
  try {
    const data = await jabatanServices.deleteJabatan(kd_jabatan);
    return res.status(201).json({
      status: "success",
      message: "User berhasil dihapus",
      data,
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
        case "P2025":
          return res
            .status(400)
            .json({ status: "error", message: "Jabatan tidak ditemukan" });
        default:
          break;
      }
    }
    return res.status(500).json({ status: "error", message: err.message });
  }
};

module.exports = {
  CreateJabatan,
  GetAllJabatan,
  GetJabatan,
  UpdateJabatan,
  DeleteJabatan,
};
