const { Router } = require("express");
const validate = require("../middlewares/validate.middleware");
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

// Membuat pengumpulan tugas baru
router.post("/", validate({ body: createPengumpulanTugasSchema }), CreatePengumpulanTugas);

// Mendapatkan pengumpulan tugas berdasarkan kode
router.get("/:kd_pengumpulan_tugas", validate({ params: getPengumpulanTugasSchema }), GetPengumpulanTugas);

// Mendapatkan semua pengumpulan tugas
router.get("/", validate({ query: getAllPengumpulanTugasSchema }), GetAllPengumpulanTugas);

// Memperbarui pengumpulan tugas
router.put(
  "/:kd_pengumpulan_tugas",
  validate({
    params: updatePengumpulanTugasSchema.pick({ kd_pengumpulan_tugas: true }),
    body: updatePengumpulanTugasSchema.omit({ kd_pengumpulan_tugas: true }),
  }),
  UpdatePengumpulanTugas
);

// Menghapus pengumpulan tugas
router.delete(
  "/:kd_pengumpulan_tugas",
  validate({ params: deletePengumpulanTugasSchema }),
  DeletePengumpulanTugas
);

module.exports = router;