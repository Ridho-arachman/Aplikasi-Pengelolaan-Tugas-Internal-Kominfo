const authService = require("../../services/auth.service");
const prisma = require("../../libs/prisma");
const hashService = require("../../services/hash.service");
const jwt = require("jsonwebtoken");
const { getUser } = require("../../services/user.service"); // Import getUser

// Mock constants from auth.service.js if they are not exported or to override them
// However, JWT_SECRET and JWT_REFRESH_SECRET are used internally by jwt.sign/verify
// So we mainly mock the functions themselves.

jest.mock("../../libs/prisma", () => ({
  user: {
    findUnique: jest.fn(),
  },
}));
jest.mock("../../services/hash.service");
jest.mock("jsonwebtoken");
jest.mock("../../services/user.service"); // Mock user.service

describe("Auth Service", () => {
  const mockUser = {
    nip: "123456789012345678",
    nama: "Test User",
    password: "hashedPassword",
    role: "user",
    kd_jabatan: "J01",
  };
  const JWT_SECRET = "your-secret-key"; // Use actual values for assertion if needed, or mock them away
  const JWT_REFRESH_SECRET = "your-refresh-secret-key";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("loginUser", () => {
    it("should return tokens and user info for valid credentials", async () => {
      getUser.mockResolvedValue(mockUser);
      hashService.comparePassword.mockResolvedValue(true);
      jwt.sign
        .mockReturnValueOnce("accessToken") // First call for accessToken
        .mockReturnValueOnce("refreshToken"); // Second call for refreshToken

      const result = await authService.loginUser(mockUser.nip, "password");

      expect(getUser).toHaveBeenCalledWith(mockUser.nip);
      expect(hashService.comparePassword).toHaveBeenCalledWith(
        "password",
        mockUser.password
      );
      expect(jwt.sign).toHaveBeenCalledTimes(2);
      expect(jwt.sign).toHaveBeenNthCalledWith(
        1,
        { nip: mockUser.nip, role: mockUser.role },
        JWT_SECRET, // Actual secret from service
        { expiresIn: "15m" }
      );
      expect(jwt.sign).toHaveBeenNthCalledWith(
        2,
        { nip: mockUser.nip, role: mockUser.role },
        JWT_REFRESH_SECRET, // Actual secret from service
        { expiresIn: "7d" }
      );
      expect(result).toEqual({
        accessToken: "accessToken",
        refreshToken: "refreshToken",
        user: {
          nip: mockUser.nip,
          nama: mockUser.nama,
          role: mockUser.role,
          kd_jabatan: mockUser.kd_jabatan,
        },
      });
    });

    it("should throw an error if user not found", async () => {
      getUser.mockResolvedValue(null);

      await expect(
        authService.loginUser("nonexistentNip", "password")
      ).rejects.toThrow("Invalid NIP or password");
    });

    it("should throw an error for invalid password", async () => {
      getUser.mockResolvedValue(mockUser);
      hashService.comparePassword.mockResolvedValue(false);

      await expect(
        authService.loginUser(mockUser.nip, "wrongPassword")
      ).rejects.toThrow("Invalid NIP or password");
    });
  });

  describe("refreshAccessToken", () => {
    it("should return a new access token for a valid refresh token", async () => {
      const mockUser = {
        nip: "123456789012345678",
        role: "user",
      };

      const mockRefreshToken = "valid-refresh-token";
      const mockDecodedToken = {
        nip: mockUser.nip,
        role: mockUser.role,
      };

      jwt.verify.mockReturnValue(mockDecodedToken);
      getUser.mockResolvedValue(mockUser);
      jwt.sign.mockReturnValue("new-access-token");

      const result = await authService.refreshAccessToken(mockRefreshToken);

      expect(result).toEqual({ accessToken: "new-access-token" });
      expect(jwt.verify).toHaveBeenCalledWith(
        mockRefreshToken,
        JWT_REFRESH_SECRET
      );
      expect(getUser).toHaveBeenCalledWith(mockUser.nip);
      expect(jwt.sign).toHaveBeenCalledWith(
        expect.objectContaining({
          nip: mockUser.nip,
          role: mockUser.role,
        }),
        JWT_SECRET,
        { expiresIn: "15m" }
      );
    });

    it("should throw an error for an invalid refresh token (JsonWebTokenError)", async () => {
      const jwtError = new Error("Invalid token signature");
      jwtError.name = "JsonWebTokenError";
      jwt.verify.mockImplementation(() => {
        throw jwtError;
      });

      await expect(
        authService.refreshAccessToken("invalidRefreshToken")
      ).rejects.toThrow("Invalid refresh token");
    });

    it("should throw an error for an expired refresh token", async () => {
      const jwtError = new Error("jwt expired");
      jwtError.name = "TokenExpiredError";
      jwt.verify.mockImplementation(() => {
        throw jwtError;
      });

      await expect(
        authService.refreshAccessToken("expiredRefreshToken")
      ).rejects.toThrow("Refresh token expired");
    });

    it("should throw an error if user not found during refresh", async () => {
      const decodedToken = { nip: mockUser.nip, role: mockUser.role };
      jwt.verify.mockReturnValue(decodedToken);
      getUser.mockResolvedValue(null); // Simulate user not found

      await expect(
        authService.refreshAccessToken("validRefreshTokenButUserNotFound")
      ).rejects.toThrow("User not found");
    });
  });
});
