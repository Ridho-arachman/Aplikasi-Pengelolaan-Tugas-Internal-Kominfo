const prisma = require("../lib/prisma");

const createUser = async (data) => {
  return await prisma.user.create({ data });
};

const getUser = async (nip) => {
  return await prisma.user.findUnique({ where: { nip } });
};

const getAllUser = async () => {
  return await prisma.user.findMany();
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
