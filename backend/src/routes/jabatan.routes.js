const { Router } = require("express");
const {
  CreateJabatan,
  GetAllJabatan,
  GetJabatan,
  UpdateJabatan,
  DeleteJabatan,
} = require("../controllers/jabatan.controller");
const validate = require("../middlewares/validate.middleware");
const {
  createJabatanSchema,
  getAllJabatanSchema,
  getJabatanSchema,
  updateJabatanSchema,
  deleteJabatanSchema,
} = require("../validation/jabatan.validation");

const router = Router();

router.post(
  "/",
  validate({ body: createJabatanSchema.pick({ nama_jabatan: true }) }),
  CreateJabatan
);
router.get("/", validate(getAllJabatanSchema), GetAllJabatan);
router.get("/:kd_jabatan", validate({ params: getJabatanSchema }), GetJabatan);
router.put(
  "/:kd_jabatan",
  validate({
    params: updateJabatanSchema.pick({ kd_jabatan: true }),
    body: updateJabatanSchema.pick({ nama_jabatan: true }),
  }),
  UpdateJabatan
);
router.delete(
  "/:kd_jabatan",
  validate({ params: deleteJabatanSchema }),
  DeleteJabatan
);

module.exports = router;
