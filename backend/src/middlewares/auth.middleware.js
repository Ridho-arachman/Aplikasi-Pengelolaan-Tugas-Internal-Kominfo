const passport = require("../configs/passport.config");

// Middleware untuk autentikasi JWT
const authenticateJWT = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "Token tidak valid atau kadaluarsa",
        data: null,
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

// Middleware untuk otorisasi role
const authorizeRoles = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        status: "error",
        code: 401,
        message: "Sesi Anda telah berakhir, silakan login kembali",
        data: null,
      });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        status: "error",
        code: 403,
        message: "Anda tidak memiliki akses untuk mengakses sumber daya ini",
        data: null,
      });
    }

    next();
  };
};

module.exports = {
  authenticateJWT,
  authorizeRoles,
};
