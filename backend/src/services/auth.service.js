const { comparePassword } = require("./hash.service");
const jwt = require("jsonwebtoken");
const { getUser } = require("./user.service");

// You should store these in environment variables in a real application
const JWT_SECRET = "your-secret-key"; // Replace with a strong secret key
const JWT_REFRESH_SECRET = "your-refresh-secret-key"; // Replace with a strong refresh secret key
const ACCESS_TOKEN_EXPIRATION = "15m"; // Access token expires in 15 minutes
const REFRESH_TOKEN_EXPIRATION = "7d"; // Refresh token expires in 7 days

/**
 * Verifies user credentials and generates JWT tokens.
 * @param {string} nip - User's NIP.
 * @param {string} password - User's password.
 * @returns {Promise<Object|null>} Tokens if successful, null otherwise.
 */
const loginUser = async (nip, password) => {
  try {
    const user = await getUser(nip);
    if (!user) {
      // throw new Error("User not found"); // Original
      throw new Error("Invalid NIP or password"); // Changed
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      // throw new Error("Invalid password"); // Original
      throw new Error("Invalid NIP or password"); // Changed
    }

    // Generate tokens
    const accessToken = jwt.sign(
      { nip: user.nip, role: user.role },
      JWT_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRATION }
    );

    const refreshToken = jwt.sign(
      { nip: user.nip, role: user.role },
      JWT_REFRESH_SECRET,
      { expiresIn: REFRESH_TOKEN_EXPIRATION }
    );

    return {
      accessToken,
      refreshToken,
      user: {
        nip: user.nip,
        nama: user.nama,
        role: user.role,
        kd_jabatan: user.kd_jabatan,
      },
    };
  } catch (error) {
    console.error("Error in loginUser:", error.message); // Log message only for brevity
    // throw new Error("Login failed"); // Re-throw specific error or a generic one
    throw error; // Re-throw the original error to be caught by tests
  }
};

/**
 * Generates a new access token using a refresh token.
 * @param {string} token - The refresh token.
 * @returns {Promise<Object|null>} New access token if successful, null otherwise.
 */
const refreshAccessToken = async (token) => {
  try {
    const decoded = jwt.verify(token, JWT_REFRESH_SECRET);
    const user = await getUser(decoded.nip);

    if (!user) {
      throw new Error("User not found");
    }

    // Add timestamp and random string to ensure unique token
    const accessToken = jwt.sign(
      {
        nip: user.nip,
        role: user.role,
        iat: Math.floor(Date.now() / 1000), // Add current timestamp
        jti: Math.random().toString(36).substring(7), // Add random string
      },
      JWT_SECRET,
      { expiresIn: ACCESS_TOKEN_EXPIRATION }
    );

    return { accessToken };
  } catch (error) {
    console.error("Error in refreshAccessToken:", error.message);
    if (error.name === "TokenExpiredError") {
      throw new Error("Refresh token expired");
    }
    if (error.name === "JsonWebTokenError") {
      throw new Error("Invalid refresh token");
    }
    throw error;
  }
};

module.exports = {
  loginUser,
  refreshAccessToken,
  JWT_SECRET, // Exporting for passport strategy
};
