const { Router } = require("express");
const {
  GetLaporan,
  GetAllLaporan,
} = require("../controllers/laporan.controller");

const router = Router();

router.get("/:id", GetLaporan);
router.get("/", GetAllLaporan);

module.exports = router;
