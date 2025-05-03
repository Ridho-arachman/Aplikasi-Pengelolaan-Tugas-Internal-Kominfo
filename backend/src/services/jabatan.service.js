const prisma = require("../lib/prisma");

const createJabatan = async (data) => {
  return await prisma.jabatan.create({ data });
};

const getJabatan = async (kd_jabatan) => {
  return await prisma.jabatan.findUnique({
    where: {
      kd_jabatan,
    },
  });
};

const getAllJabatan = async (kd_jabatan, nama_jabatan) => {
  if (kd_jabatan)
    return await prisma.jabatan.findMany({ where: { kd_jabatan } });

  if (nama_jabatan)
    return await prisma.jabatan.findMany({ where: { nama_jabatan } });

  return await prisma.jabatan.findMany();
};

const updateJabatan = async (kd_jabatan, nama_jabatan) => {
  return await prisma.jabatan.update({
    where: {
      kd_jabatan,
    },
    data: { nama_jabatan },
  });
};

const deleteJabatan = async (kd_jabatan) => {
  return await prisma.jabatan.delete({
    where: {
      kd_jabatan,
    },
  });
};

module.exports = {
  createJabatan,
  getAllJabatan,
  getJabatan,
  updateJabatan,
  deleteJabatan,
};
