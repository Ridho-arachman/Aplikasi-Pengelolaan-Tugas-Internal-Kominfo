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

/**
 * Integration test untuk HistoryJabatan routes
 * Test ini mencakup operasi CRUD untuk HistoryJabatan
 */
describe("Integration test for HistoryJabatan routes", () => {
  let accessToken;
  let userNip;
  let jabatanKode;
  let createdHistoryJabatan;

  beforeAll(async () => {
    try {
      // Setup test user dan dapatkan token
      const { testUserNip, testUserKdJabatan } = await setupTestUser();
      userNip = testUserNip;
      jabatanKode = testUserKdJabatan;

      const { accessToken: token } = await getAuthToken();
      accessToken = token;
    } catch (error) {
      console.error("Error saat setup test:", error);
      throw error;
    }
  });

  afterAll(async () => {
    try {
      await cleanupTestData();
      await prisma.$disconnect();
      console.log("Database dibersihkan setelah test dan disconnected");
    } catch (error) {
      console.error("Error saat membersihkan database:", error);
      throw error;
    }
  });

  // Create
  it("should create a new HistoryJabatan", async () => {
    try {
      const data = {
        user_nip: userNip,
        kd_jabatan: jabatanKode,
        tanggal_mulai: new Date().toISOString(),
        tanggal_akhir: null,
      };

      console.log("Data untuk membuat HistoryJabatan:", data);

      const res = await request(app)
        .post("/api/history-jabatan")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(data);

      console.log("Respon Create HistoryJabatan:", res.body);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty(
        "message",
        "History jabatan berhasil dibuat"
      );
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body.data).toHaveProperty("id");
      expect(res.body.data).toHaveProperty("user_nip", userNip);
      expect(res.body.data).toHaveProperty("kd_jabatan", jabatanKode);

      createdHistoryJabatan = res.body.data;
    } catch (error) {
      console.error("Error saat membuat HistoryJabatan:", error);
      throw error;
    }
  });

  // Get by ID
  it("should return specific history jabatan", async () => {
    if (!createdHistoryJabatan) {
      console.log("Skipping test: history jabatan not created");
      return;
    }

    try {
      const { id } = createdHistoryJabatan;
      const res = await request(app)
        .get(`/api/history-jabatan/${id}`)
        .set("Authorization", `Bearer ${accessToken}`);

      console.log("Respon Get by ID:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty(
        "message",
        "History jabatan berhasil ditemukan"
      );
      expect(res.body.data).toHaveProperty("id", id);
      expect(res.body.data).toHaveProperty("user_nip", userNip);
      expect(res.body.data).toHaveProperty("kd_jabatan", jabatanKode);
    } catch (error) {
      console.error("Error saat mendapatkan HistoryJabatan by ID:", error);
      throw error;
    }
  });

  // Get All
  it("should return all history jabatan", async () => {
    try {
      const res = await request(app)
        .get("/api/history-jabatan")
        .set("Authorization", `Bearer ${accessToken}`);

      console.log("Respon Get All:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty(
        "message",
        "Daftar history jabatan berhasil ditemukan"
      );
      expect(Array.isArray(res.body.data)).toBe(true);

      // Jika ada history jabatan yang berhasil dibuat sebelumnya
      if (createdHistoryJabatan) {
        expect(res.body.data.length).toBeGreaterThan(0);
      }
    } catch (error) {
      console.error("Error saat mendapatkan semua HistoryJabatan:", error);
      throw error;
    }
  });

  // Update
  it("should update history jabatan", async () => {
    if (!createdHistoryJabatan) {
      console.log("Skipping test: history jabatan not created");
      return;
    }

    try {
      const { id } = createdHistoryJabatan;
      const tanggal_akhir = new Date();
      tanggal_akhir.setDate(tanggal_akhir.getDate() + 30); // 30 hari dari sekarang

      const updateData = {
        tanggal_akhir: tanggal_akhir.toISOString(),
      };

      console.log("Data untuk update HistoryJabatan:", updateData);

      const res = await request(app)
        .put(`/api/history-jabatan/${id}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(updateData);

      console.log("Respon Update:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty(
        "message",
        "History jabatan berhasil diperbarui"
      );
      expect(res.body.data).toHaveProperty("tanggal_akhir");
    } catch (error) {
      console.error("Error saat update HistoryJabatan:", error);
      throw error;
    }
  });

  // Delete
  it("should delete history jabatan", async () => {
    if (!createdHistoryJabatan) {
      console.log("Skipping test: history jabatan not created");
      return;
    }

    try {
      const { id } = createdHistoryJabatan;
      const res = await request(app)
        .delete(`/api/history-jabatan/${id}`)
        .set("Authorization", `Bearer ${accessToken}`);

      console.log("Respon Delete:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty(
        "message",
        "History jabatan berhasil dihapus"
      );
    } catch (error) {
      console.error("Error saat delete HistoryJabatan:", error);
      throw error;
    }
  });
});
