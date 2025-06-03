const { Router } = require("express");
const validate = require("../middlewares/validate.middleware");
const {
  authenticateJWT,
  authorizeRoles,
} = require("../middlewares/auth.middleware");
const { uploadPDF } = require("../configs/cloudinary");
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

router.use(authenticateJWT);

// Membuat laporan baru
router.post(
  "/",
  authorizeRoles(["user"]),
  validate({ body: createLaporanSchema }),
  CreateLaporan
);

// Mendapatkan laporan berdasarkan kode
router.get(
  "/:kd_laporan",
  authorizeRoles(["admin", "user"]),
  validate({ params: getLaporanSchema }),
  GetLaporan
);

// Mendapatkan semua laporan
router.get(
  "/",
  authorizeRoles(["admin", "user"]),
  validate({ query: getAllLaporanSchema }),
  GetAllLaporan
);

// Memperbarui laporan
router.put(
  "/:kd_laporan",
  authorizeRoles(["user"]),
  validate({
    params: updateLaporanSchema.pick({ kd_laporan: true }),
    body: updateLaporanSchema.omit({ kd_laporan: true }),
  }),
  UpdateLaporan
);

// Menghapus laporan
router.delete(
  "/:kd_laporan",
  authorizeRoles(["admin", "user"]),
  validate({ params: deleteLaporanSchema }),
  DeleteLaporan
);

module.exports = router;
