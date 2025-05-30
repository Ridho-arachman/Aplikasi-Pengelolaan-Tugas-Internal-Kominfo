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

describe("Integration test for Tugas routes", () => {
  let accessToken;
  let userNip;
  let jabatanKode;
  let createdTugas;

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

      console.log("Data untuk membuat Tugas:", data);

      const res = await request(app)
        .post("/api/tugas")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(data);

      console.log("Respon Create Tugas:", res.body);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("message", "Tugas berhasil dibuat");
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body.data).toHaveProperty("kd_tugas");
      expect(res.body.data).toHaveProperty("judul", "Membuat Laporan Bulanan");
      expect(res.body.data).toHaveProperty("user_nip", userNip);

      createdTugas = res.body.data;
    } catch (error) {
      console.error("Error saat membuat Tugas:", error);
      throw error;
    }
  });

  // Get by ID
  it("should return specific tugas", async () => {
    if (!createdTugas) {
      console.log("Skipping test: tugas not created");
      return;
    }

    try {
      const { kd_tugas } = createdTugas;
      const res = await request(app)
        .get(`/api/tugas/${kd_tugas}`)
        .set("Authorization", `Bearer ${accessToken}`);

      console.log("Respon Get by ID:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Tugas berhasil ditemukan");
      expect(res.body.data).toHaveProperty("kd_tugas", kd_tugas);
      expect(res.body.data).toHaveProperty("judul", "Membuat Laporan Bulanan");
      expect(res.body.data).toHaveProperty("user_nip", userNip);
    } catch (error) {
      console.error("Error saat mendapatkan Tugas by ID:", error);
      throw error;
    }
  });

  // Get All
  it("should return all tugas", async () => {
    try {
      const res = await request(app)
        .get("/api/tugas")
        .set("Authorization", `Bearer ${accessToken}`);

      console.log("Respon Get All:", res.body);

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
      console.error("Error saat mendapatkan semua Tugas:", error);
      throw error;
    }
  });

  // Update
  it("should update tugas", async () => {
    if (!createdTugas) {
      console.log("Skipping test: tugas not created");
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

      console.log("Respon Update:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Tugas berhasil diperbarui");
      expect(res.body.data).toHaveProperty(
        "judul",
        "Laporan Bulanan Diperbarui"
      );
      expect(res.body.data).toHaveProperty("status", "in_progress");
    } catch (error) {
      console.error("Error saat update Tugas:", error);
      throw error;
    }
  });

  // Delete
  it("should delete tugas", async () => {
    if (!createdTugas) {
      console.log("Skipping test: tugas not created");
      return;
    }

    try {
      const { kd_tugas } = createdTugas;
      const res = await request(app)
        .delete(`/api/tugas/${kd_tugas}`)
        .set("Authorization", `Bearer ${accessToken}`);

      console.log("Respon Delete:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Tugas berhasil dihapus");
    } catch (error) {
      console.error("Error saat delete Tugas:", error);
      throw error;
    }
  });
});
