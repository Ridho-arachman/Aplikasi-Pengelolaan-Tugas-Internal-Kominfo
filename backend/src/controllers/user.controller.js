const { Prisma } = require("../../generated/prisma");
const { createPassword } = require("../services/hash.service");
const {
  createUser,
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
} = require("../services/user.service");

const CreateUser = async (req, res) => {
  try {
    const { nip, nama, password, role, kd_jabatan, nip_atasan, image } =
      req.body;

    const hashedPassword = await createPassword(password);

    const user = await createUser({
      nip,
      nama,
      password: hashedPassword,
      role,
      kd_jabatan,
      nip_atasan,
      image,
    });

    return res.status(201).json({
      status: "success",
      message: "User berhasil dibuat",
      data: user,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2002":
          return res.status(409).json({
            status: "error",
            message: "User dengan NIP tersebut sudah ada",
          });
        case "P2003":
          return res.status(400).json({
            status: "error",
            message: "Jabatan atau atasan tidak ditemukan",
          });
      }
    }
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const GetUser = async (req, res) => {
  try {
    const { nip } = req.params;

    const user = await getUser(nip);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User tidak ditemukan",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "User berhasil ditemukan",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const GetAllUser = async (req, res) => {
  try {
    const { nip, nama, role, kd_jabatan, nip_atasan } = req.query;

    const users = await getAllUser(nip, nama, role, kd_jabatan, nip_atasan);

    return res.status(200).json({
      status: "success",
      message:
        users.length > 0
          ? "Daftar user berhasil ditemukan"
          : "Tidak ada user yang ditemukan",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const UpdateUser = async (req, res) => {
  try {
    const { nip } = req.params;
    const { nama, password, role, kd_jabatan, nip_atasan, image } = req.body;

    // Cek apakah user ada
    const existingUser = await getUser(nip);
    if (!existingUser) {
      return res.status(404).json({
        status: "error",
        message: "User tidak ditemukan",
      });
    }

    // Persiapkan data untuk update
    const updateData = {};

    // Tambahkan field yang diupdate jika ada
    if (nama) updateData.nama = nama;
    if (role) updateData.role = role;
    if (kd_jabatan) updateData.kd_jabatan = kd_jabatan;
    if (nip_atasan) updateData.nip_atasan = nip_atasan;
    if (image) updateData.image = image;

    // Jika password diubah, hash password baru
    if (password) {
      updateData.password = await createPassword(password);
    }

    const updatedUser = await updateUser(nip, updateData);

    return res.status(200).json({
      status: "success",
      message: "User berhasil diperbarui",
      data: updatedUser,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2003":
          return res.status(400).json({
            status: "error",
            message: "Jabatan atau atasan tidak ditemukan",
          });
        case "P2025":
          return res.status(404).json({
            status: "error",
            message: "User tidak ditemukan",
          });
      }
    }
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const { nip } = req.params;

    // Cek apakah user ada
    const existingUser = await getUser(nip);
    if (!existingUser) {
      return res.status(404).json({
        status: "error",
        message: "User tidak ditemukan",
      });
    }

    const deletedUser = await deleteUser(nip);

    return res.status(200).json({
      status: "success",
      message: "User berhasil dihapus",
      data: deletedUser,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      switch (error.code) {
        case "P2025":
          return res.status(404).json({
            status: "error",
            message: "User tidak ditemukan",
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
  CreateUser,
  GetUser,
  GetAllUser,
  UpdateUser,
  DeleteUser,
};
