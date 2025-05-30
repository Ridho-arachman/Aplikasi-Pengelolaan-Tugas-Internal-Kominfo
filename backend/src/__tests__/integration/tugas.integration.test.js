const request = require("supertest");
const app = require("../../../app");
const prisma = require("../../libs/prisma");
const {
  setupTestUser,
  setupTestAdmin,
  cleanupTestData,
  getAuthToken,
  getAdminAuthToken,
} = require("../helpers/test.helper");

// Tambahkan timeout yang lebih panjang untuk Jest
jest.setTimeout(60000); // 60 detik

describe("Integration test for Tugas routes", () => {
  let accessToken;
  let adminAccessToken;
  let userNip;
  let jabatanKode;
  let createdTugas;

  beforeAll(async () => {
    try {
      // Setup test user dan admin
      const { testUserNip, testUserKdJabatan } = await setupTestUser();
      userNip = testUserNip;
      jabatanKode = testUserKdJabatan;

      await setupTestAdmin();

      // Get tokens
      const { accessToken: userToken } = await getAuthToken();
      const { accessToken: adminToken } = await getAdminAuthToken();
      accessToken = userToken;
      adminAccessToken = adminToken;
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

  // Create Tugas
  it("should create a new Tugas", async () => {
    try {
      const data = {
        judul: "Membuat Laporan Bulanan",
        deskripsi: "Membuat laporan kinerja bulanan",
        user_nip: userNip,
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 hari dari sekarang
        prioritas: "tinggi",
      };

      const res = await request(app)
        .post("/api/tugas")
        .set("Authorization", `Bearer ${adminAccessToken}`)
        .send(data);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("message", "Tugas berhasil dibuat");
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body.data).toHaveProperty("kd_tugas");
      expect(res.body.data).toHaveProperty("judul", "Membuat Laporan Bulanan");
      expect(res.body.data).toHaveProperty("user_nip", userNip);

      createdTugas = res.body.data;
    } catch (error) {
      throw error;
    }
  });

  // Get by ID
  it("should return specific tugas", async () => {
    if (!createdTugas) {
      return;
    }

    try {
      const { kd_tugas } = createdTugas;
      const res = await request(app)
        .get(`/api/tugas/${kd_tugas}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Tugas berhasil ditemukan");
      expect(res.body.data).toHaveProperty("kd_tugas", kd_tugas);
      expect(res.body.data).toHaveProperty("judul", "Membuat Laporan Bulanan");
      expect(res.body.data).toHaveProperty("user_nip", userNip);
    } catch (error) {
      throw error;
    }
  });

  // Get All
  it("should return all tugas", async () => {
    if (!createdTugas) {
      return;
    }

    try {
      const res = await request(app)
        .get("/api/tugas")
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty(
        "message",
        "Daftar tugas berhasil ditemukan"
      );
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.length).toBeGreaterThan(0);

      // Cek apakah tugas yang kita buat ada dalam daftar
      const foundTugas = res.body.data.find(
        (tugas) => tugas.kd_tugas === createdTugas.kd_tugas
      );
      expect(foundTugas).toBeTruthy();
    } catch (error) {
      throw error;
    }
  });

  // Update
  it("should update tugas", async () => {
    if (!createdTugas) {
      return;
    }

    try {
      const { kd_tugas } = createdTugas;
      const updateData = {
        judul: "Laporan Bulanan Diperbarui",
        status: "in_progress",
      };

      const res = await request(app)
        .put(`/api/tugas/${kd_tugas}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(updateData);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Tugas berhasil diperbarui");
      expect(res.body.data).toHaveProperty(
        "judul",
        "Laporan Bulanan Diperbarui"
      );
      expect(res.body.data).toHaveProperty("status", "in_progress");
    } catch (error) {
      throw error;
    }
  });

  // Delete
  it("should delete tugas", async () => {
    if (!createdTugas) {
      return;
    }

    try {
      const { kd_tugas } = createdTugas;
      const res = await request(app)
        .delete(`/api/tugas/${kd_tugas}`)
        .set("Authorization", `Bearer ${adminAccessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Tugas berhasil dihapus");
    } catch (error) {
      throw error;
    }
  });
});
