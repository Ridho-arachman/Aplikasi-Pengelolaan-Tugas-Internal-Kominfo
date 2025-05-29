const authService = require("../services/auth.service");

const login = async (req, res) => {
  try {
    const { nip, password } = req.body;
    const result = await authService.loginUser(nip, password);

    if (!result) {
      return res.status(401).json({
        status: "error",
        message: "NIP atau password salah",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Login successful",
      data: result,
    });
  } catch (error) {
    console.error("Login error:", error);
    if (error.message === "Invalid NIP or password") {
      return res.status(401).json({
        status: "error",
        message: error.message,
      });
    }
    return res.status(500).json({
      status: "error",
      message: error.message || "Terjadi kesalahan pada server",
    });
  }
};

const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({
        status: "error",
        message: "Refresh token harus diisi",
      });
    }

    const result = await authService.refreshAccessToken(refreshToken);

    if (!result) {
      return res.status(401).json({
        status: "error",
        message: "Refresh token tidak valid atau kadaluarsa",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Access token refreshed successfully",
      data: result,
    });
  } catch (error) {
    console.error("Refresh token error:", error);
    // Send specific error message from service if available
    const errorMessage =
      error.message === "Refresh token expired" ||
      error.message === "Invalid refresh token"
        ? error.message
        : "Gagal memperbarui token";
    const statusCode =
      error.message === "Refresh token expired" ||
      error.message === "Invalid refresh token"
        ? 401
        : 500;

    return res.status(statusCode).json({
      status: "error",
      message: errorMessage,
    });
  }
};

// Example of a protected route controller function
const protectedData = (req, res) => {
  // req.user is populated by Passport JWT strategy
  res.status(200).json({
    status: "success",
    message: "Protected data accessed successfully",
    data: {
      message: "This is protected data.",
      user: req.user, // Contains user info from JWT
    },
  });
};

module.exports = {
  login,
  refreshToken,
  protectedData, // Exporting for example purposes
};
