const { Router } = require("express");
const validate = require("../middlewares/validate.middleware");
const {
  authenticateJWT,
  authorizeRoles,
} = require("../middlewares/auth.middleware");
const { uploadImage } = require("../configs/cloudinary");
const {
  createUserSchema,
  getUserSchema,
  getAllUserSchema,
  updateUserSchema,
  deleteUserSchema,
} = require("../validation/user.validation");
const {
  CreateUser,
  GetUser,
  GetAllUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/user.controller");

const router = Router();

router.use(authenticateJWT);

router.post(
  "/",
  authorizeRoles(["admin"]),
  uploadImage.single("image"),
  validate({ body: createUserSchema }),
  CreateUser
);
router.get(
  "/:nip",
  authorizeRoles(["admin", "user"]),
  validate({ params: getUserSchema }),
  GetUser
);
router.get(
  "/",
  authorizeRoles(["admin", "user"]),
  validate({ query: getAllUserSchema }),
  GetAllUser
);
router.put(
  "/:nip",
  authorizeRoles(["admin"]),
  uploadImage.single("image"),
  validate({
    params: updateUserSchema.pick({ nip: true }),
    body: updateUserSchema.omit({ nip: true }),
  }),
  UpdateUser
);
router.delete(
  "/:nip",
  authorizeRoles(["admin"]),
  validate({ params: deleteUserSchema }),
  DeleteUser
);

module.exports = router;
