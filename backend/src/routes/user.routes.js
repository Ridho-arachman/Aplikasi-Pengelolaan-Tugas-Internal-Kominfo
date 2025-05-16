const { Router } = require("express");
const validate = require("../middlewares/validate.middleware");
const {
  createUserSchema,
  getUserSchema,
  getAllUserSchema,
  updateUserSchema,
  deleteUserSchema,
} = require("../validation/user.validation");
const { CreateUser, GetUser, GetAllUser, UpdateUser, DeleteUser } = require("../controllers/user.controller");

const router = Router();

router.post("/", validate({ body: createUserSchema }), CreateUser);
router.get("/:nip", validate({ params: getUserSchema }), GetUser);
router.get("/", validate({ query: getAllUserSchema }), GetAllUser);
router.put("/:nip", validate({ 
  params: updateUserSchema.pick({ nip: true }),
  body: updateUserSchema.omit({ nip: true })
}), UpdateUser);
router.delete("/:nip", validate({ params: deleteUserSchema }), DeleteUser);

module.exports = router;
