const { Router } = require("express");
const validate = require("../middlewares/validate.middleware");
const {
  authenticateJWT,
  authorizeRoles,
} = require("../middlewares/auth.middleware");
const {
  createHistoryJabatanSchema,
  getHistoryJabatanSchema,
  getAllHistoryJabatanSchema,
  updateHistoryJabatanSchema,
  deleteHistoryJabatanSchema,
} = require("../validation/historyJabatan.validation");
const {
  CreateHistoryJabatan,
  GetHistoryJabatan,
  GetAllHistoryJabatan,
  UpdateHistoryJabatan,
  DeleteHistoryJabatan,
} = require("../controllers/historyJabatan.controller");

const router = Router();

router.use(authenticateJWT);

// Membuat history jabatan baru
router.post(
  "/",
  authorizeRoles(["admin"]),
  validate({ body: createHistoryJabatanSchema }),
  CreateHistoryJabatan
);

// Mendapatkan history jabatan berdasarkan ID
router.get(
  "/:kd_history",
  authorizeRoles(["admin", "user"]),
  validate({ params: getHistoryJabatanSchema }),
  GetHistoryJabatan
);

// Mendapatkan semua history jabatan
router.get(
  "/",
  authorizeRoles(["admin", "user"]),
  validate({ query: getAllHistoryJabatanSchema }),
  GetAllHistoryJabatan
);

// Memperbarui history jabatan
router.put(
  "/:kd_history",
  authorizeRoles(["admin"]),
  validate({
    params: updateHistoryJabatanSchema.pick({ kd_history: true }),
    body: updateHistoryJabatanSchema.omit({ kd_history: true }),
  }),
  UpdateHistoryJabatan
);

// Menghapus history jabatan
router.delete(
  "/:kd_history",
  authorizeRoles(["admin"]),
  validate({ params: deleteHistoryJabatanSchema }),
  DeleteHistoryJabatan
);

module.exports = router;
