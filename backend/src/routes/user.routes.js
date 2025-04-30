const { Router } = require("express");

const router = Router();
router.get("/", (req, res) => {
  res.json({ message: "Hello from user router" });
});

router.get("/users", (req, res) => {
  res.json({ message: "Hello from user router" }).sendStatus("ok");
});

module.exports = router;
