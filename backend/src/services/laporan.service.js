const prisma = require("./prisma.service");

const getLaporan = async (id) => {
  return await prisma.laporan.findUnique({
    where: {
      kd_laporan: id,
    },
  });
};

const getAllLaporan = async () => {
  return await prisma.laporan.findMany();
};

module.exports = {
  getLaporan,
  getAllLaporan,
};
