const { Router } = require("express");
const validate = require("../middlewares/validate.middleware");
const {
  authenticateJWT,
  authorizeRoles,
} = require("../middlewares/auth.middleware");
const {
  createTugasSchema,
  getTugasSchema,
  getAllTugasSchema,
  updateTugasSchema,
  deleteTugasSchema,
} = require("../validation/tugas.validation");
const {
  CreateTugas,
  GetTugas,
  GetAllTugas,
  UpdateTugas,
  DeleteTugas,
} = require("../controllers/tugas.controller");

const router = Router();

router.use(authenticateJWT);

// Membuat tugas baru
router.post(
  "/",
  authorizeRoles(["admin"]),
  validate({ body: createTugasSchema }),
  CreateTugas
);

// Mendapatkan tugas berdasarkan kode
router.get(
  "/:kd_tugas",
  authorizeRoles(["admin", "user"]),
  validate({ params: getTugasSchema }),
  GetTugas
);

// Mendapatkan semua tugas
router.get(
  "/",
  authorizeRoles(["admin", "user"]),
  validate({ query: getAllTugasSchema }),
  GetAllTugas
);

// Memperbarui tugas
router.put(
  "/:kd_tugas",
  authorizeRoles(["admin", "user"]),
  validate({
    params: updateTugasSchema.pick({ kd_tugas: true }),
    body: updateTugasSchema.omit({ kd_tugas: true }),
  }),
  UpdateTugas
);

// Menghapus tugas
router.delete(
  "/:kd_tugas",
  authorizeRoles(["admin"]),
  validate({ params: deleteTugasSchema }),
  DeleteTugas
);

module.exports = router;
