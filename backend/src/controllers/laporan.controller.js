const laporanServices = require("../services/laporan.services");

const GetLaporan = async (req, res) => {
  const { id } = req.params;

  if (!id || id.trim() === "") {
    return res
      .json({ message: "Id is required or not just space" })
      .status(400);
  }

  const data = await laporanServices.getLaporan(id);

  if (!data) {
    res
      .json({ status: "failed", message: "Laporan tidak ditemukan" })
      .status(404);
  }

  res.json({ status: "success", data });
};

const GetAllLaporan = async (req, res) => {
  const data = await laporanServices.getAllLaporan();
  if (data.length === 0) {
    res
      .json({ status: "failed", message: "Laporan tidak ditemukan" })
      .status(404);
  }
  res.json({ status: "success", data });
};

module.exports = {
  GetLaporan,
  GetAllLaporan,
};
