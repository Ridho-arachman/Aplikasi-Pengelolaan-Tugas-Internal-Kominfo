const { Router } = require("express");
const validate = require("../middlewares/validate.middleware");
const {
  authenticateJWT,
  authorizeRoles,
} = require("../middlewares/auth.middleware");
const {
  uploadPengumpulanTugasFilesMiddleware,
} = require("../middlewares/upload.middleware");
const {
  createPengumpulanTugasSchema,
  getPengumpulanTugasSchema,
  getAllPengumpulanTugasSchema,
  updatePengumpulanTugasSchema,
  deletePengumpulanTugasSchema,
} = require("../validation/pengumpulanTugas.validation");
const {
  CreatePengumpulanTugas,
  GetPengumpulanTugas,
  GetAllPengumpulanTugas,
  UpdatePengumpulanTugas,
  DeletePengumpulanTugas,
} = require("../controllers/pengumpulanTugas.controller");

const router = Router();

router.use(authenticateJWT);

// Membuat pengumpulan tugas baru
router.post(
  "/",
  authorizeRoles(["user"]),
  uploadPengumpulanTugasFilesMiddleware,
  validate({ body: createPengumpulanTugasSchema }),
  CreatePengumpulanTugas
);

// Mendapatkan pengumpulan tugas berdasarkan kode
router.get(
  "/:kd_pengumpulan_tugas",
  authorizeRoles(["admin", "user"]),
  validate({ params: getPengumpulanTugasSchema }),
  GetPengumpulanTugas
);

// Mendapatkan semua pengumpulan tugas
router.get(
  "/",
  authorizeRoles(["admin", "user"]),
  validate({ query: getAllPengumpulanTugasSchema }),
  GetAllPengumpulanTugas
);

// Memperbarui pengumpulan tugas
router.put(
  "/:kd_pengumpulan_tugas",
  authorizeRoles(["user"]),
  uploadPengumpulanTugasFilesMiddleware,
  validate({
    params: updatePengumpulanTugasSchema.pick({ kd_pengumpulan_tugas: true }),
    body: updatePengumpulanTugasSchema.omit({ kd_pengumpulan_tugas: true }),
  }),
  UpdatePengumpulanTugas
);

// Menghapus pengumpulan tugas
router.delete(
  "/:kd_pengumpulan_tugas",
  authorizeRoles(["admin", "user"]),
  validate({ params: deletePengumpulanTugasSchema }),
  DeletePengumpulanTugas
);

module.exports = router;
