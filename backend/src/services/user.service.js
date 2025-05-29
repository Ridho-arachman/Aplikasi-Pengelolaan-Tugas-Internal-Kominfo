const prisma = require("../libs/prisma");

const createUser = async (data) => {
  const user = await prisma.user.create({
    data,
  });
  return {
    nip: user.nip,
    nama: user.nama,
    role: user.role,
    kd_jabatan: user.kd_jabatan,
    nip_atasan: user.nip_atasan,
  };
};

const getUser = async (nip) => {
  return await prisma.user.findUnique({
    where: { nip },
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
  });
};

const updateUser = async (nip, data) => {
  return await prisma.user.update({ where: { nip }, data });
};

const deleteUser = async (nip) => {
  return await prisma.user.delete({ where: { nip } });
};

module.exports = {
  createUser,
  getUser,
  getAllUser,
  updateUser,
  deleteUser,
};
