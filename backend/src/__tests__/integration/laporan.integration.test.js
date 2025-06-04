const request = require("supertest");
const path = require("path");
const fs = require("fs");
const app = require("../../../app");
const prisma = require("../../libs/prisma");
const {
  setupTestUser,
  cleanupTestData,
  getAuthToken,
} = require("../helpers/test.helper");

// Tambahkan timeout yang lebih panjang untuk Jest
jest.setTimeout(60000); // 60 detik

describe("Integration test for Laporan routes", () => {
  let accessToken;
  let userNip;
  let jabatanKode;
  let createdLaporan;

  beforeAll(async () => {
    try {
      // Buat folder uploads jika belum ada
      const uploadsDir = path.join(__dirname, "../../../uploads/laporan");
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true });
      }

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
      // Bersihkan file yang diupload
      const uploadsDir = path.join(__dirname, "../../../uploads/laporan");
      if (fs.existsSync(uploadsDir)) {
        const files = fs.readdirSync(uploadsDir);
        files.forEach((file) => {
          fs.unlinkSync(path.join(uploadsDir, file));
        });
      }

      await cleanupTestData();
      await prisma.$disconnect();
    } catch (error) {
      throw error;
    }
  });

  // Create Laporan
  it("should create a new Laporan with multiple files", async () => {
    try {
      const data = {
        isi_laporan: "Ini adalah isi laporan test",
        judul_laporan: "Laporan Bulanan Test",
        user_nip: userNip,
      };

      // Periksa keberadaan file test
      const fixturesPath = path.join(__dirname, "../fixtures");
      const testPdfPath = path.join(fixturesPath, "test.pdf");
      const testDocxPath = path.join(fixturesPath, "test.docx");
      const testXlsxPath = path.join(fixturesPath, "test.xlsx");

      if (!fs.existsSync(testPdfPath)) {
        throw new Error(`File test.pdf tidak ditemukan di ${testPdfPath}`);
      }
      if (!fs.existsSync(testDocxPath)) {
        throw new Error(`File test.docx tidak ditemukan di ${testDocxPath}`);
      }
      if (!fs.existsSync(testXlsxPath)) {
        throw new Error(`File test.xlsx tidak ditemukan di ${testXlsxPath}`);
      }

      const res = await request(app)
        .post("/api/laporan")
        .set("Authorization", `Bearer ${accessToken}`)
        .field("isi_laporan", data.isi_laporan)
        .field("judul_laporan", data.judul_laporan)
        .field("user_nip", data.user_nip)
        .attach("files", testPdfPath)
        .attach("files", testDocxPath)
        .attach("files", testXlsxPath);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("message", "Laporan berhasil dibuat");
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body.data).toHaveProperty("kd_laporan");
      expect(res.body.data).toHaveProperty(
        "judul_laporan",
        "Laporan Bulanan Test"
      );
      expect(res.body.data).toHaveProperty("user_nip", userNip);
      expect(res.body.data.files).toHaveLength(3);

      createdLaporan = res.body.data;
    } catch (error) {
      console.error("Test error:", error);
      throw error;
    }
  });

  // Get by ID
  it("should return specific laporan", async () => {
    if (!createdLaporan) {
      return;
    }

    try {
      const { kd_laporan } = createdLaporan;
      const res = await request(app)
        .get(`/api/laporan/${kd_laporan}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Laporan berhasil ditemukan");
      expect(res.body.data).toHaveProperty("kd_laporan", kd_laporan);
      expect(res.body.data).toHaveProperty(
        "judul_laporan",
        "Laporan Bulanan Test"
      );
      expect(res.body.data).toHaveProperty("user_nip", userNip);
    } catch (error) {
      throw error;
    }
  });

  // Get All
  it("should return all laporan", async () => {
    try {
      const res = await request(app)
        .get("/api/laporan")
        .set("Authorization", `Bearer ${accessToken}`);

      if (res.status === 404) {
        expect(res.body).toHaveProperty("status", "error");
        expect(res.body).toHaveProperty(
          "message",
          "Tidak ada laporan yang ditemukan"
        );
      } else {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("status", "success");
        expect(res.body).toHaveProperty(
          "message",
          "Daftar laporan berhasil ditemukan"
        );
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);
      }
    } catch (error) {
      throw error;
    }
  });

  // Update
  it("should update laporan", async () => {
    if (!createdLaporan) {
      return;
    }

    try {
      const { kd_laporan } = createdLaporan;
      const updateData = {
        judul_laporan: "Laporan Bulanan Updated",
        isi_laporan: "Isi laporan yang sudah diupdate",
      };

      const res = await request(app)
        .put(`/api/laporan/${kd_laporan}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(updateData);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Laporan berhasil diperbarui");
      expect(res.body.data).toHaveProperty(
        "judul_laporan",
        "Laporan Bulanan Updated"
      );
      expect(res.body.data).toHaveProperty(
        "isi_laporan",
        "Isi laporan yang sudah diupdate"
      );
    } catch (error) {
      throw error;
    }
  });

  // Delete
  it("should delete laporan", async () => {
    if (!createdLaporan) {
      return;
    }

    try {
      const { kd_laporan } = createdLaporan;
      const res = await request(app)
        .delete(`/api/laporan/${kd_laporan}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Laporan berhasil dihapus");
    } catch (error) {
      throw error;
    }
  });
});
