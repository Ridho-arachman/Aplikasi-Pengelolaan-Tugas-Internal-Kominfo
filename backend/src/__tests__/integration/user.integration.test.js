const request = require("supertest");
const app = require("../../../app");
const prisma = require("../../libs/prisma");
const {
  setupTestUser,
  cleanupTestData,
  getAuthToken,
} = require("../helpers/test.helper");

// Tambahkan timeout yang lebih panjang untuk Jest
jest.setTimeout(60000); // 60 detik

describe("Integration test for User routes", () => {
  let accessToken;
  let userNip;
  let jabatanKode;
  let createdUser;

  beforeAll(async () => {
    try {
      // Setup test user dan dapatkan token
      const { testUserNip, testUserKdJabatan } = await setupTestUser();
      userNip = testUserNip;
      jabatanKode = testUserKdJabatan;

      const { accessToken: token } = await getAuthToken();
      accessToken = token;
    } catch (error) {
      throw error;
    }
  });

  afterAll(async () => {
    try {
      await cleanupTestData();
      await prisma.$disconnect();
    } catch (error) {
      throw error;
    }
  });

  // Create
  it("should create a new User", async () => {
    try {
      // Gunakan timestamp untuk membuat nama jabatan yang unik
      const uniqueJabatanName = `Kepala Seksi IT ${Date.now()}`;

      const resJabatan = await request(app)
        .post("/api/jabatan")
        .set("Authorization", `Bearer ${accessToken}`)
        .send({ nama_jabatan: uniqueJabatanName });

      expect(resJabatan.status).toBe(201);
      expect(resJabatan.body.data).toHaveProperty("kd_jabatan");

      jabatanKode = resJabatan.body.data.kd_jabatan;

      const res = await request(app)
        .post("/api/user")
        .set("Authorization", `Bearer ${accessToken}`)
        .send({
          nip: "123456789012385282",
          nama: "John Doe",
          password: "Password123!",
          role: "admin",
          kd_jabatan: jabatanKode,
        });

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("message", "User berhasil dibuat");
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body.data).toHaveProperty("nip", "123456789012385282");
      expect(res.body.data).toHaveProperty("nama", "John Doe");
      expect(res.body.data).toHaveProperty("role", "admin");
      expect(res.body.data).toHaveProperty("kd_jabatan", jabatanKode);

      createdUser = res.body.data;
    } catch (error) {
      throw error;
    }
  });

  // Get by NIP
  it("should return specific user", async () => {
    if (!createdUser) {
      return;
    }

    try {
      const { nip } = createdUser;
      const res = await request(app)
        .get(`/api/user/${nip}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "User berhasil ditemukan");
      expect(res.body.data).toHaveProperty("nip", nip);
      expect(res.body.data).toHaveProperty("nama", "John Doe");
    } catch (error) {
      throw error;
    }
  });

  // Get All Users
  it("should return all users", async () => {
    try {
      const res = await request(app)
        .get("/api/user")
        .set("Authorization", `Bearer ${accessToken}`);

      if (res.status === 404) {
        expect(res.body).toHaveProperty("status", "error");
        expect(res.body).toHaveProperty(
          "message",
          "Tidak ada user yang ditemukan"
        );
      } else {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("status", "success");
        expect(res.body).toHaveProperty(
          "message",
          "Daftar user berhasil ditemukan"
        );
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);
      }
    } catch (error) {
      throw error;
    }
  });

  // Update User
  it("should update user data", async () => {
    if (!createdUser) {
      return;
    }

    try {
      const { nip } = createdUser;
      const updateData = {
        nama: "John Updated",
        password: "NewPassword123!",
        role: "user",
        kd_jabatan: jabatanKode,
      };

      const res = await request(app)
        .put(`/api/user/${nip}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(updateData);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "User berhasil diperbarui");
      expect(res.body.data).toHaveProperty("nama", "John Updated");
    } catch (error) {
      throw error;
    }
  });

  // Delete User
  it("should delete user", async () => {
    if (!createdUser) {
      return;
    }

    try {
      const { nip } = createdUser;
      const res = await request(app)
        .delete(`/api/user/${nip}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "User berhasil dihapus");
    } catch (error) {
      throw error;
    }
  });
});
