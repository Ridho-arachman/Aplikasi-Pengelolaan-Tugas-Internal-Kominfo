const { Router } = require("express");
const { CreateUser } = require("../controllers/user.controller");

const router = Router();
router.post("/", CreateUser);

router.get("/users", (req, res) => {
  res.json({ message: "Hello from user router" }).sendStatus("ok");
});

module.exports = router;
