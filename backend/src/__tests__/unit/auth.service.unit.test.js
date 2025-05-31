const authService = require("../../services/auth.service");
const userService = require("../../services/user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

jest.mock("../../services/user.service");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");

describe("Auth Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("loginUser", () => {
    it("harus mengembalikan token dan info user jika kredensial valid", async () => {
      const mockUser = {
        nip: "123456789012345678",
        nama: "Test User",
        role: "user",
        password: "hashedPassword",
        kd_jabatan: "J001",
      };

      userService.getUser.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockImplementation((payload, secret, options) => {
        if (options.expiresIn === process.env.ACCESS_TOKEN_EXPIRATION)
          return "mockAccessToken";
        if (options.expiresIn === process.env.REFRESH_TOKEN_EXPIRATION)
          return "mockRefreshToken";
        return null;
      });

      const result = await authService.loginUser(
        "123456789012345678",
        "password123"
      );

      expect(userService.getUser).toHaveBeenCalledWith("123456789012345678");
      expect(bcrypt.compare).toHaveBeenCalledWith(
        "password123",
        "hashedPassword"
      );
      expect(jwt.sign).toHaveBeenCalledTimes(2);
      expect(jwt.sign).toHaveBeenCalledWith(
        { nip: "123456789012345678", role: "user" },
        process.env.JWT_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
      );
      expect(jwt.sign).toHaveBeenCalledWith(
        { nip: "123456789012345678", role: "user" },
        process.env.JWT_REFRESH_SECRET,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRATION }
      );
      expect(result).toEqual({
        accessToken: "mockAccessToken",
        refreshToken: "mockRefreshToken",
        user: {
          nip: "123456789012345678",
          nama: "Test User",
          role: "user",
          kd_jabatan: "J001",
        },
      });
    });

    it("harus throw error jika kredensial tidak valid", async () => {
      userService.getUser.mockResolvedValue(null);

      await expect(
        authService.loginUser("123456789012345678", "password123")
      ).rejects.toThrow("Invalid NIP or password");

      expect(userService.getUser).toHaveBeenCalledWith("123456789012345678");
      expect(bcrypt.compare).not.toHaveBeenCalled();
    });

    it("harus throw error jika password salah", async () => {
      const mockUser = {
        nip: "123456789012345678",
        nama: "Test User",
        role: "user",
        password: "hashedPassword",
        kd_jabatan: "J001",
      };

      userService.getUser.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(false);

      await expect(
        authService.loginUser("123456789012345678", "wrongpassword")
      ).rejects.toThrow("Invalid NIP or password");

      expect(userService.getUser).toHaveBeenCalledWith("123456789012345678");
      expect(bcrypt.compare).toHaveBeenCalledWith(
        "wrongpassword",
        "hashedPassword"
      );
    });
  });

  describe("refreshAccessToken", () => {
    it("harus mengembalikan access token baru jika refresh token valid", async () => {
      const mockUser = {
        nip: "123456789012345678",
        nama: "Test User",
        role: "user",
        kd_jabatan: "J001",
      };

      jwt.verify.mockReturnValue({ nip: "123456789012345678", role: "user" });
      userService.getUser.mockResolvedValue(mockUser);
      jwt.sign.mockReturnValue("mockNewAccessToken");

      const result = await authService.refreshAccessToken(
        "valid.refresh.token"
      );

      expect(jwt.verify).toHaveBeenCalledWith(
        "valid.refresh.token",
        process.env.JWT_REFRESH_SECRET
      );
      expect(userService.getUser).toHaveBeenCalledWith("123456789012345678");
      expect(jwt.sign).toHaveBeenCalledWith(
        {
          nip: "123456789012345678",
          role: "user",
          iat: expect.any(Number),
          jti: expect.any(String),
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
      );
      expect(result).toEqual({ accessToken: "mockNewAccessToken" });
    });

    it("harus throw error jika refresh token tidak valid", async () => {
      jwt.verify.mockImplementation(() => {
        throw new Error("Invalid refresh token");
      });

      await expect(
        authService.refreshAccessToken("invalid.refresh.token")
      ).rejects.toThrow("Invalid refresh token");

      expect(jwt.verify).toHaveBeenCalledWith(
        "invalid.refresh.token",
        process.env.JWT_REFRESH_SECRET
      );
      expect(userService.getUser).not.toHaveBeenCalled();
    });

    it("harus throw error jika refresh token expired", async () => {
      jwt.verify.mockImplementation(() => {
        const error = new Error("Token expired");
        error.name = "TokenExpiredError";
        throw error;
      });

      await expect(
        authService.refreshAccessToken("expired.refresh.token")
      ).rejects.toThrow("Refresh token expired");

      expect(jwt.verify).toHaveBeenCalledWith(
        "expired.refresh.token",
        process.env.JWT_REFRESH_SECRET
      );
      expect(userService.getUser).not.toHaveBeenCalled();
    });

    it("harus throw error jika user tidak ditemukan", async () => {
      jwt.verify.mockReturnValue({ nip: "123456789012345678", role: "user" });
      userService.getUser.mockResolvedValue(null);

      await expect(
        authService.refreshAccessToken("valid.refresh.token")
      ).rejects.toThrow("User not found");

      expect(jwt.verify).toHaveBeenCalledWith(
        "valid.refresh.token",
        process.env.JWT_REFRESH_SECRET
      );
      expect(userService.getUser).toHaveBeenCalledWith("123456789012345678");
      expect(jwt.sign).not.toHaveBeenCalled();
    });
  });
});
