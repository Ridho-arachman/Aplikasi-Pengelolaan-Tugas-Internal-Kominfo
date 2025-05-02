const prisma = require("./prisma.service");

const creteUser = (data) => {
  return prisma.user.create({ data });
};

module.exports = {
  creteUser,
};
