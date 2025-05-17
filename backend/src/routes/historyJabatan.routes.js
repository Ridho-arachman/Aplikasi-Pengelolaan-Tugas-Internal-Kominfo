const { Router } = require("express");
const validate = require("../middlewares/validate.middleware");
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

// Membuat history jabatan baru
router.post("/", validate({ body: createHistoryJabatanSchema }), CreateHistoryJabatan);

// Mendapatkan history jabatan berdasarkan ID
router.get("/:id", validate({ params: getHistoryJabatanSchema }), GetHistoryJabatan);

// Mendapatkan semua history jabatan
router.get("/", validate({ query: getAllHistoryJabatanSchema }), GetAllHistoryJabatan);

// Memperbarui history jabatan
router.put("/:id", validate({
  params: updateHistoryJabatanSchema.pick({ id: true }),
  body: updateHistoryJabatanSchema.omit({ id: true })
}), UpdateHistoryJabatan);

// Menghapus history jabatan
router.delete("/:id", validate({ params: deleteHistoryJabatanSchema }), DeleteHistoryJabatan);

module.exports = router;