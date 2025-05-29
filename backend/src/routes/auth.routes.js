const express = require("express");
const authController = require("../controllers/auth.controller");
const validate = require("../middlewares/validate.middleware");
const {
  loginSchema,
  refreshTokenSchema,
} = require("../validation/auth.validation");
const passport = require("../configs/passport.config"); // Import passport config

const router = express.Router();

// Route for user login
router.post("/login", validate(loginSchema), authController.login);

// Route for refreshing access token
router.post(
  "/refresh-token",
  validate(refreshTokenSchema),
  authController.refreshToken
);

// Example of a protected route using JWT authentication
// The 'jwt' strategy comes from our passport.config.js
router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }), // Protect this route
  authController.protectedData
);

module.exports = router;
