const prisma = require("../libs/prisma");
const { cloudinary } = require("../configs/cloudinary");

// Fungsi untuk menghapus image dari Cloudinary
const deleteImageFromCloudinary = async (imageUrl) => {
  if (!imageUrl) return;

  try {
    // Ekstrak public_id dari URL Cloudinary dengan lebih akurat
    const urlParts = imageUrl.split("/");
    const uploadIndex = urlParts.indexOf("upload");
    if (uploadIndex === -1) return;

    // Ambil bagian setelah 'upload' dan sebelum format file
    const publicId = urlParts
      .slice(uploadIndex + 2)
      .join("/")
      .split(".")[0];

    const result = await cloudinary.uploader.destroy(publicId);
  } catch (error) {}
};

const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
    include: {
      jabatan: true,
      atasan: {
        select: {
          nip: true,
          nama: true,
          jabatan: true,
        },
      },
    },
  });
  return {
    nip: user.nip,
    nama: user.nama,
    role: user.role,
    kd_jabatan: user.kd_jabatan,
    nip_atasan: user.nip_atasan,
    image: user.image,
    jabatan: user.jabatan,
    atasan: user.atasan,
  };
};

const getUser = async (nip) => {
  return await prisma.user.findUnique({
    where: { nip },
    include: {
      jabatan: true,
      atasan: {
        select: {
          nip: true,
          nama: true,
          jabatan: true,
        },
      },
      bawahan: {
        select: {
          nip: true,
          nama: true,
          jabatan: true,
        },
      },
    },
  });
};

const getAllUser = async (nip, nama, role, kd_jabatan, nip_atasan) => {
  const conditions = [];

  if (nip) {
    conditions.push({ nip: { contains: nip } });
  }

  if (nama) {
    conditions.push({ nama: { contains: nama } });
  }

  if (kd_jabatan) {
    conditions.push({
      kd_jabatan: { contains: kd_jabatan },
    });
  }

  if (role) {
    conditions.push({ role: role });
  }

  if (nip_atasan) {
    conditions.push({ nip_atasan: nip_atasan });
  }

  return await prisma.user.findMany({
    where: conditions.length > 0 ? { OR: conditions } : undefined,
    include: {
      jabatan: true,
      atasan: {
        select: {
          nip: true,
          nama: true,
          jabatan: true,
        },
      },
      bawahan: {
        select: {
          nip: true,
          nama: true,
          jabatan: true,
        },
      },
    },
  });
};

const updateUser = async (nip, data) => {
  // Jika ada image baru, hapus image lama
  if (data.image) {
    const existingUser = await getUser(nip);
    if (existingUser && existingUser.image) {
      try {
        await deleteImageFromCloudinary(existingUser.image);
        // Tunggu sebentar untuk memastikan penghapusan selesai
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (error) {
        // Lanjutkan proses meskipun gagal menghapus
      }
    }
  }

  return await prisma.user.update({
    where: { nip },
    data,
    include: {
      jabatan: true,
      atasan: {
        select: {
          nip: true,
          nama: true,
          jabatan: true,
        },
      },
      bawahan: {
        select: {
          nip: true,
          nama: true,
          jabatan: true,
        },
      },
    },
  });
};

const deleteUser = async (nip) => {
  // Ambil data user sebelum dihapus
  const user = await getUser(nip);

  // Hapus image dari Cloudinary jika ada
  if (user && user.image) {
    await deleteImageFromCloudinary(user.image);
  }

  return await prisma.user.delete({
    where: { nip },
    include: {
      jabatan: true,
      atasan: {
        select: {
          nip: true,
          nama: true,
          jabatan: true,
        },
      },
      bawahan: {
        select: {
          nip: true,
          nama: true,
          jabatan: true,
        },
      },
    },
  });
};

module.exports = {
  createUser,
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
};
