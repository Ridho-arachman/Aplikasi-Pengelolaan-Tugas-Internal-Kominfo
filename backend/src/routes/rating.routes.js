const { Router } = require("express");
const { z } = require("zod");
const validate = require("../middlewares/validate.middleware");
const {
  createRatingSchema,
  getRatingSchema,
  getAllRatingSchema,
  updateRatingSchema,
  deleteRatingSchema,
} = require("../validation/rating.validation");
const {
  CreateRating,
  GetRating,
  GetAllRating,
  UpdateRating,
  DeleteRating,
  GetRatingByPengumpulanTugas,
} = require("../controllers/rating.controller");

const router = Router();

// Membuat rating baru
router.post("/", validate({ body: createRatingSchema }), CreateRating);

// Mendapatkan rating berdasarkan kode pengumpulan tugas
// Penting: Rute spesifik harus didefinisikan sebelum rute dinamis
router.get(
  "/pengumpulan-tugas/:kd_pengumpulan_tugas",
  validate({
    params: z.object({
      kd_pengumpulan_tugas: z.string().min(1, "Kode Pengumpulan Tugas harus diisi"),
    }),
  }),
  GetRatingByPengumpulanTugas
);

// Mendapatkan rating berdasarkan kode
router.get("/:kd_rating", validate({ params: getRatingSchema }), GetRating);

// Mendapatkan semua rating
router.get("/", validate({ query: getAllRatingSchema }), GetAllRating);

// Memperbarui rating
router.put(
  "/:kd_rating",
  validate({
    params: updateRatingSchema.pick({ kd_rating: true }),
    body: updateRatingSchema.omit({ kd_rating: true }),
  }),
  UpdateRating
);

// Menghapus rating
router.delete(
  "/:kd_rating",
  validate({ params: deleteRatingSchema }),
  DeleteRating
);

module.exports = router;