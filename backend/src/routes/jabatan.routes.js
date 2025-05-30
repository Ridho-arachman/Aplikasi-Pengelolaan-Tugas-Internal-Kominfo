const { Router } = require("express");
const validate = require("../middlewares/validate.middleware");
const {
  authenticateJWT,
  authorizeRoles,
} = require("../middlewares/auth.middleware");
const {
  createJabatanSchema,
  getJabatanSchema,
  getAllJabatanSchema,
  updateJabatanSchema,
  deleteJabatanSchema,
} = require("../validation/jabatan.validation");
const {
  CreateJabatan,
  GetJabatan,
  GetAllJabatan,
  UpdateJabatan,
  DeleteJabatan,
} = require("../controllers/jabatan.controller");

const router = Router();

router.use(authenticateJWT);

router.post(
  "/",
  authorizeRoles(["admin"]),
  validate({ body: createJabatanSchema }),
  CreateJabatan
);
router.get(
  "/:kd_jabatan",
  authorizeRoles(["admin", "user"]),
  validate({ params: getJabatanSchema }),
  GetJabatan
);
router.get(
  "/",
  authorizeRoles(["admin", "user"]),
  validate({ query: getAllJabatanSchema }),
  GetAllJabatan
);
router.put(
  "/:kd_jabatan",
  authorizeRoles(["admin"]),
  validate({
    params: updateJabatanSchema.pick({ kd_jabatan: true }),
    body: updateJabatanSchema.omit({ kd_jabatan: true }),
  }),
  UpdateJabatan
);
router.delete(
  "/:kd_jabatan",
  authorizeRoles(["admin"]),
  validate({ params: deleteJabatanSchema }),
  DeleteJabatan
);

module.exports = router;
