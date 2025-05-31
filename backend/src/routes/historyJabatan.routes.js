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
  "/:id",
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
  "/:id",
  authorizeRoles(["admin"]),
  validate({
    params: updateHistoryJabatanSchema.pick({ id: true }),
    body: updateHistoryJabatanSchema.omit({ id: true }),
  }),
  UpdateHistoryJabatan
);

// Menghapus history jabatan
router.delete(
  "/:id",
  authorizeRoles(["admin"]),
  validate({ params: deleteHistoryJabatanSchema }),
  DeleteHistoryJabatan
);

module.exports = router;
