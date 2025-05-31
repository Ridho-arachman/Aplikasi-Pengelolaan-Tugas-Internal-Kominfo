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

describe("Integration test for Rating routes", () => {
  let accessToken;
  let userNip;
  let jabatanKode;
  let tugasKode;
  let pengumpulanTugasKode;
  let createdRating;

  beforeAll(async () => {
    try {
      // Setup test user dan dapatkan token
      const { testUserNip, testUserKdJabatan } = await setupTestUser();
      userNip = testUserNip;
      jabatanKode = testUserKdJabatan;

      const { accessToken: token } = await getAuthToken();
      accessToken = token;

      // Buat tugas untuk test
      const tugas = await prisma.tugas.create({
        data: {
          judul: "Tugas Test untuk Rating",
          deskripsi: "Deskripsi tugas test untuk rating",
          user_nip: userNip,
          status: "pending",
          deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 hari dari sekarang
          prioritas: "tinggi",
        },
      });

      tugasKode = tugas.kd_tugas;

      // Buat pengumpulan tugas untuk test
      const pengumpulanTugas = await prisma.pengumpulanTugas.create({
        data: {
          kd_tugas: tugasKode,
          user_nip: userNip,
          tanggal_pengumpulan: new Date(),
          file_path: "/path/to/test/file.pdf",
          catatan: "Catatan pengumpulan tugas test",
          status: "menunggu",
        },
      });

      pengumpulanTugasKode = pengumpulanTugas.kd_pengumpulan_tugas;
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

  // Create Rating
  it("should create a new Rating", async () => {
    try {
      const data = {
        kd_pengumpulan_tugas: pengumpulanTugasKode,
        nilai: 85,
        komentar: "Pengumpulan tugas cukup baik",
      };

      const res = await request(app)
        .post("/api/rating")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(data);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("message", "Rating berhasil dibuat");
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body.data).toHaveProperty("kd_rating");
      expect(res.body.data).toHaveProperty(
        "kd_pengumpulan_tugas",
        pengumpulanTugasKode
      );
      expect(res.body.data).toHaveProperty("nilai", 85);
      expect(res.body.data).toHaveProperty(
        "komentar",
        "Pengumpulan tugas cukup baik"
      );

      createdRating = res.body.data;
    } catch (error) {
      throw error;
    }
  });

  // Get by ID
  it("should return specific rating", async () => {
    if (!createdRating) {
      return;
    }

    try {
      const { kd_rating } = createdRating;
      const res = await request(app)
        .get(`/api/rating/${kd_rating}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Rating berhasil ditemukan");
      expect(res.body.data).toHaveProperty("kd_rating", kd_rating);
      expect(res.body.data).toHaveProperty(
        "kd_pengumpulan_tugas",
        pengumpulanTugasKode
      );
      expect(res.body.data).toHaveProperty("nilai", 85);
    } catch (error) {
      throw error;
    }
  });

  // Get All
  it("should return all ratings", async () => {
    try {
      const res = await request(app)
        .get("/api/rating")
        .set("Authorization", `Bearer ${accessToken}`);

      if (res.status === 404) {
        expect(res.body).toHaveProperty("status", "error");
        expect(res.body).toHaveProperty(
          "message",
          "Tidak ada rating yang ditemukan"
        );
      } else {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("status", "success");
        expect(res.body).toHaveProperty(
          "message",
          "Daftar rating berhasil ditemukan"
        );
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);
      }
    } catch (error) {
      throw error;
    }
  });

  // Get by Pengumpulan Tugas ID
  it("should return rating by pengumpulan tugas id", async () => {
    try {
      const res = await request(app)
        .get(`/api/rating/pengumpulan-tugas/${pengumpulanTugasKode}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Rating berhasil ditemukan");
      expect(res.body.data).toHaveProperty(
        "kd_pengumpulan_tugas",
        pengumpulanTugasKode
      );
    } catch (error) {
      console.error(
        "Error saat mendapatkan Rating by Pengumpulan Tugas ID:",
        error
      );
      throw error;
    }
  });

  // Update
  it("should update rating", async () => {
    if (!createdRating) {
      return;
    }

    try {
      const { kd_rating } = createdRating;
      const updateData = {
        nilai: 90,
        komentar: "Pengumpulan tugas sangat baik setelah direvisi",
      };

      const res = await request(app)
        .put(`/api/rating/${kd_rating}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(updateData);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Rating berhasil diperbarui");
      expect(res.body.data).toHaveProperty("nilai", 90);
      expect(res.body.data).toHaveProperty(
        "komentar",
        "Pengumpulan tugas sangat baik setelah direvisi"
      );
    } catch (error) {
      throw error;
    }
  });

  // Delete
  it("should delete rating", async () => {
    if (!createdRating) {
      return;
    }

    try {
      const { kd_rating } = createdRating;
      const res = await request(app)
        .delete(`/api/rating/${kd_rating}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Rating berhasil dihapus");
    } catch (error) {
      throw error;
    }
  });
});
