const request = require("supertest");
const app = require("../../../app"); // Adjust path as needed
const prisma = require("../../libs/prisma");
const { createPassword } = require("../../services/hash.service");

// Increase Jest timeout for potentially long-running tests
jest.setTimeout(60000); // 60 seconds

describe("Auth Routes Integration Tests", () => {
  let testUserNip;
  let testUserPassword = "Password123!";
  let testUserKdJabatan;

  // Helper function to clean up the database
  async function cleanupDatabase() {
    try {
      await prisma.user.deleteMany({ where: { nip: testUserNip } });
      if (testUserKdJabatan) {
        await prisma.jabatan.deleteMany({
          where: { kd_jabatan: testUserKdJabatan },
        });
      }
      console.log("Test data cleaned up from database");
    } catch (error) {
      console.error("Error cleaning up database:", error);
      // Don't throw error here, as it might hide the actual test failure
    }
  }

  beforeAll(async () => {
    await cleanupDatabase(); // Clean up before any tests run

    try {
      // Create a Jabatan for the test user
      const jabatan = await prisma.jabatan.create({
        data: {
          nama_jabatan: `Test Jabatan Auth ${Date.now()}`,
        },
      });
      testUserKdJabatan = jabatan.kd_jabatan;

      // Create a test user
      const hashedPassword = await createPassword(testUserPassword);
      // Ensure NIP is unique and 18 characters
      testUserNip = `auth${Date.now()}`.slice(0, 18).padEnd(18, "0");

      await prisma.user.create({
        data: {
          nip: testUserNip,
          nama: "Auth Test User",
          password: hashedPassword,
          role: "user",
          kd_jabatan: testUserKdJabatan,
        },
      });
      console.log(`Test user ${testUserNip} created for auth tests.`);
    } catch (error) {
      console.error("Error setting up test user:", error);
      throw error; // Throw if setup fails, as tests depend on it
    }
  });

  afterAll(async () => {
    await cleanupDatabase(); // Clean up after all tests have run
    await prisma.$disconnect();
    console.log("Disconnected from Prisma after auth tests.");
  });

  let accessToken = null;
  let refreshToken = null;

  describe("POST /api/auth/login", () => {
    it("should login a user and return tokens with valid credentials", async () => {
      const res = await request(app).post("/api/auth/login").send({
        nip: testUserNip,
        password: testUserPassword,
      });

      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
      expect(res.body.message).toBe("Login successful");
      expect(res.body.data).toHaveProperty("accessToken");
      expect(res.body.data).toHaveProperty("refreshToken");

      accessToken = res.body.data.accessToken;
      refreshToken = res.body.data.refreshToken;
    });

    it("should return 401 for invalid NIP", async () => {
      const res = await request(app).post("/api/auth/login").send({
        nip: "invalidNIP12345678",
        password: testUserPassword,
      });
      expect(res.status).toBe(401);
      expect(res.body.message).toBe("Invalid NIP or password");
    });

    it("should return 401 for invalid password", async () => {
      const res = await request(app).post("/api/auth/login").send({
        nip: testUserNip,
        password: "wrongPassword",
      });
      expect(res.status).toBe(401);
      expect(res.body.message).toBe("Invalid NIP or password");
    });

    it("should return 400 for missing NIP", async () => {
      const res = await request(app).post("/api/auth/login").send({
        password: testUserPassword,
      });
      expect(res.status).toBe(400);
      // Zod error messages might be nested
      expect(res.body.message).toContain("NIP harus diisi");
    });

    it("should return 400 for missing password", async () => {
      const res = await request(app).post("/api/auth/login").send({
        nip: testUserNip,
      });
      expect(res.status).toBe(400);
      expect(res.body.message).toContain("Password harus diisi");
    });
  });

  describe("POST /api/auth/refresh-token", () => {
    it("should refresh the access token with a valid refresh token", async () => {
      expect(refreshToken).not.toBeNull(); // Ensure refreshToken was obtained

      const res = await request(app)
        .post("/api/auth/refresh-token")
        .send({ refreshToken });

      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
      expect(res.body.message).toBe("Access token refreshed successfully");
      expect(res.body.data).toHaveProperty("accessToken");
      expect(res.body.data.accessToken).not.toBe(accessToken); // New access token
      accessToken = res.body.data.accessToken; // Update accessToken for subsequent tests
    });

    it("should return 401 for an invalid refresh token", async () => {
      const res = await request(app)
        .post("/api/auth/refresh-token")
        .send({ refreshToken: "invalidRefreshToken" });
      expect(res.status).toBe(401);
      expect(res.body.message).toBe("Invalid refresh token");
    });

    it("should return 400 for missing refresh token", async () => {
      const res = await request(app).post("/api/auth/refresh-token").send({});
      expect(res.status).toBe(400);
      expect(res.body.message).toContain("Refresh token harus diisi");
    });
  });

  describe("GET /api/auth/protected", () => {
    it("should access protected data with a valid access token", async () => {
      expect(accessToken).not.toBeNull(); // Ensure accessToken was obtained

      const res = await request(app)
        .get("/api/auth/protected")
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body.status).toBe("success");
      expect(res.body.message).toBe("Protected data accessed successfully");
      expect(res.body.data.message).toBe("This is protected data.");
      expect(res.body.data.user).toHaveProperty("nip", testUserNip);
      expect(res.body.data.user).not.toHaveProperty("password"); // Ensure password is not returned
    });

    it("should return 401 for missing access token", async () => {
      const res = await request(app).get("/api/auth/protected");
      expect(res.status).toBe(401); // Passport-jwt typically returns 401 Unauthorized
      // The exact message might vary depending on how passport handles it or if a custom handler is used
      // For default behavior, it might be just 'Unauthorized'
      // expect(res.body.message).toBe('No auth token'); // Or similar, depending on passport config
    });

    it("should return 401 for an invalid access token", async () => {
      const res = await request(app)
        .get("/api/auth/protected")
        .set("Authorization", "Bearer invalidAccessToken");
      expect(res.status).toBe(401);
    });
  });
});
