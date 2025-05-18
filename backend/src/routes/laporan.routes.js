const { Router } = require("express");
const validate = require("../middlewares/validate.middleware");
const {
  createLaporanSchema,
  getLaporanSchema,
  getAllLaporanSchema,
  updateLaporanSchema,
  deleteLaporanSchema,
} = require("../validation/laporan.validation");
const {
  CreateLaporan,
  GetLaporan,
  GetAllLaporan,
  UpdateLaporan,
  DeleteLaporan,
} = require("../controllers/laporan.controller");

const router = Router();

// Membuat laporan baru
router.post("/", validate({ body: createLaporanSchema }), CreateLaporan);

// Mendapatkan laporan berdasarkan kode
router.get("/:kd_laporan", validate({ params: getLaporanSchema }), GetLaporan);

// Mendapatkan semua laporan
router.get("/", validate({ query: getAllLaporanSchema }), GetAllLaporan);

// Memperbarui laporan
router.put(
  "/:kd_laporan",
  validate({
    params: updateLaporanSchema.pick({ kd_laporan: true }),
    body: updateLaporanSchema.omit({ kd_laporan: true }),
  }),
  UpdateLaporan
);

// Menghapus laporan
router.delete(
  "/:kd_laporan",
  validate({ params: deleteLaporanSchema }),
  DeleteLaporan
);

module.exports = router;