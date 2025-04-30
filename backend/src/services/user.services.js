const prisma = require("./prisma.services");

const creteUser = async (data) => {
  return await prisma.user.create({ data });
};

module.exports = {
  creteUser,
};
