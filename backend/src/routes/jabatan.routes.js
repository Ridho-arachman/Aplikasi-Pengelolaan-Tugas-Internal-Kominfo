const { Router } = require("express");
const {
  CreateJabatan,
  GetAllJabatan,
  GetJabatan,
  UpdateJabatan,
} = require("../controllers/jabatan.controller");
const {
  createJabatanMiddleware,
  updateAndGetJabatanMiddleware,
  deleteJabatanMiddleware,
} = require("../middlewares/jabatan.middleware");

const router = Router();

router.post("/", createJabatanMiddleware, CreateJabatan);
router.get("/", GetAllJabatan);
router.get("/:kd_jabatan", updateAndGetJabatanMiddleware, GetJabatan);
router.patch("/:kd_jabatan", updateAndGetJabatanMiddleware, UpdateJabatan);
router.delete(
  "/:kd_jabatan",
  deleteJabatanMiddleware,
  updateAndGetJabatanMiddleware
);

module.exports = router;
