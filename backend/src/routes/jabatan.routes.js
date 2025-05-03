const { Router } = require("express");
const {
  CreateJabatan,
  GetAllJabatan,
  GetJabatan,
  UpdateJabatan,
  DeleteJabatan,
} = require("../controllers/jabatan.controller");
const {
  createJabatanMiddleware,
  deleteJabatanMiddleware,
  getAllJabatanMiddleware,
  getJabatanMiddleware,
  updateJabatanMiddleware,
} = require("../middlewares/jabatan.middleware");

const router = Router();

router.post("/", createJabatanMiddleware, CreateJabatan);
router.get("/", getAllJabatanMiddleware, GetAllJabatan);
router.get("/:kd_jabatan", getJabatanMiddleware, GetJabatan);
router.put("/:kd_jabatan", updateJabatanMiddleware, UpdateJabatan);
router.delete("/:kd_jabatan", deleteJabatanMiddleware, DeleteJabatan);

module.exports = router;
