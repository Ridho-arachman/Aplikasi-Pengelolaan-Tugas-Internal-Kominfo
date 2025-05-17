const { Prisma } = require("../../generated/prisma");
const {
  createHistoryJabatan,
  getHistoryJabatan,
  getAllHistoryJabatan,
  updateHistoryJabatan,
  deleteHistoryJabatan,
} = require("../services/historyJabatan.service");

/**
 * Membuat history jabatan baru
 */
const CreateHistoryJabatan = async (req, res) => {
  try {
    const { user_nip, kd_jabatan, tanggal_mulai, tanggal_akhir } = req.body;

    const historyJabatan = await createHistoryJabatan({
      user_nip,
      kd_jabatan,
      tanggal_mulai: new Date(tanggal_mulai),
      tanggal_akhir: tanggal_akhir ? new Date(tanggal_akhir) : null,
    });

    return res.status(201).json({
      status: "success",
      message: "History jabatan berhasil dibuat",
      data: historyJabatan,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2002":
          return res.status(409).json({
            status: "error",
            message: "History jabatan dengan ID tersebut sudah ada",
          });
        case "P2003":
          return res.status(400).json({
            status: "error",
            message: "User atau jabatan tidak ditemukan",
          });
      }
    }
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Mendapatkan history jabatan berdasarkan ID
 */
const GetHistoryJabatan = async (req, res) => {
  try {
    const { id } = req.params;

    const historyJabatan = await getHistoryJabatan(id);

    if (!historyJabatan) {
      return res.status(404).json({
        status: "error",
        message: "History jabatan tidak ditemukan",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "History jabatan berhasil ditemukan",
      data: historyJabatan,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Mendapatkan semua history jabatan
 */
const GetAllHistoryJabatan = async (req, res) => {
  try {
    const { user_nip, kd_jabatan } = req.query;

    const historyJabatan = await getAllHistoryJabatan(user_nip, kd_jabatan);

    return res.status(200).json({
      status: "success",
      message: "Daftar history jabatan berhasil ditemukan",
      data: historyJabatan,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Memperbarui history jabatan
 */
const UpdateHistoryJabatan = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_nip, kd_jabatan, tanggal_mulai, tanggal_akhir } = req.body;

    // Cek apakah history jabatan ada
    const existingHistoryJabatan = await getHistoryJabatan(id);
    if (!existingHistoryJabatan) {
      return res.status(404).json({
        status: "error",
        message: "History jabatan tidak ditemukan",
      });
    }

    // Persiapkan data untuk update
    const updateData = {};

    if (user_nip) {
      updateData.user_nip = user_nip;
    }

    if (kd_jabatan) {
      updateData.kd_jabatan = kd_jabatan;
    }

    if (tanggal_mulai) {
      updateData.tanggal_mulai = new Date(tanggal_mulai);
    }

    if (tanggal_akhir !== undefined) {
      updateData.tanggal_akhir = tanggal_akhir ? new Date(tanggal_akhir) : null;
    }

    const updatedHistoryJabatan = await updateHistoryJabatan(id, updateData);

    return res.status(200).json({
      status: "success",
      message: "History jabatan berhasil diperbarui",
      data: updatedHistoryJabatan,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2003":
          return res.status(400).json({
            status: "error",
            message: "User atau jabatan tidak ditemukan",
          });
        case "P2025":
          return res.status(404).json({
            status: "error",
            message: "History jabatan tidak ditemukan",
          });
      }
    }
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

/**
 * Menghapus history jabatan
 */
const DeleteHistoryJabatan = async (req, res) => {
  try {
    const { id } = req.params;

    // Cek apakah history jabatan ada
    const existingHistoryJabatan = await getHistoryJabatan(id);
    if (!existingHistoryJabatan) {
      return res.status(404).json({
        status: "error",
        message: "History jabatan tidak ditemukan",
      });
    }

    const deletedHistoryJabatan = await deleteHistoryJabatan(id);

    return res.status(200).json({
      status: "success",
      message: "History jabatan berhasil dihapus",
      data: deletedHistoryJabatan,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2025":
          return res.status(404).json({
            status: "error",
            message: "History jabatan tidak ditemukan",
          });
      }
    }
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = {
  CreateHistoryJabatan,
  GetHistoryJabatan,
  GetAllHistoryJabatan,
  UpdateHistoryJabatan,
  DeleteHistoryJabatan,
};