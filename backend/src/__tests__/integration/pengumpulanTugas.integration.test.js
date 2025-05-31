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

describe("Integration test for PengumpulanTugas routes", () => {
  let accessToken;
  let userNip;
  let jabatanKode;
  let tugasKode;
  let createdPengumpulanTugas;

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
          judul: "Tugas Test untuk Pengumpulan",
          deskripsi: "Deskripsi tugas test untuk pengumpulan",
          user_nip: userNip,
          status: "pending",
          deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 hari dari sekarang
          prioritas: "tinggi",
        },
      });

      tugasKode = tugas.kd_tugas;
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

  // Create PengumpulanTugas
  it("should create a new PengumpulanTugas", async () => {
    try {
      const data = {
        kd_tugas: tugasKode,
        user_nip: userNip,
        tanggal_pengumpulan: new Date().toISOString(),
        file_path: "/path/to/test/file.pdf",
        catatan: "Catatan pengumpulan tugas test",
        status: "menunggu",
      };

      const res = await request(app)
        .post("/api/pengumpulan-tugas")
        .set("Authorization", `Bearer ${accessToken}`)
        .send(data);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty(
        "message",
        "Pengumpulan tugas berhasil dibuat"
      );
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body.data).toHaveProperty("kd_pengumpulan_tugas");
      expect(res.body.data).toHaveProperty("kd_tugas", tugasKode);
      expect(res.body.data).toHaveProperty("user_nip", userNip);
      expect(res.body.data).toHaveProperty("status", "menunggu");

      createdPengumpulanTugas = res.body.data;
    } catch (error) {
      throw error;
    }
  });

  // Get by ID
  it("should return specific pengumpulan tugas", async () => {
    if (!createdPengumpulanTugas) {
      return;
    }

    try {
      const { kd_pengumpulan_tugas } = createdPengumpulanTugas;
      const res = await request(app)
        .get(`/api/pengumpulan-tugas/${kd_pengumpulan_tugas}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty(
        "message",
        "Pengumpulan tugas berhasil ditemukan"
      );
      expect(res.body.data).toHaveProperty(
        "kd_pengumpulan_tugas",
        kd_pengumpulan_tugas
      );
      expect(res.body.data).toHaveProperty("kd_tugas", tugasKode);
      expect(res.body.data).toHaveProperty("user_nip", userNip);
    } catch (error) {
      throw error;
    }
  });

  // Get All
  it("should return all pengumpulan tugas", async () => {
    try {
      const res = await request(app)
        .get("/api/pengumpulan-tugas")
        .set("Authorization", `Bearer ${accessToken}`);

      if (res.status === 404) {
        expect(res.body).toHaveProperty("status", "error");
        expect(res.body).toHaveProperty(
          "message",
          "Tidak ada pengumpulan tugas yang ditemukan"
        );
      } else {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("status", "success");
        expect(res.body).toHaveProperty(
          "message",
          "Daftar pengumpulan tugas berhasil ditemukan"
        );
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);
      }
    } catch (error) {
      throw error;
    }
  });

  // Update
  it("should update pengumpulan tugas", async () => {
    if (!createdPengumpulanTugas) {
      return;
    }

    try {
      const { kd_pengumpulan_tugas } = createdPengumpulanTugas;
      const updateData = {
        status: "disetujui",
        catatan: "Catatan update pengumpulan tugas test",
      };

      const res = await request(app)
        .put(`/api/pengumpulan-tugas/${kd_pengumpulan_tugas}`)
        .set("Authorization", `Bearer ${accessToken}`)
        .send(updateData);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty(
        "message",
        "Pengumpulan tugas berhasil diperbarui"
      );
      expect(res.body.data).toHaveProperty("status", "disetujui");
      expect(res.body.data).toHaveProperty(
        "catatan",
        "Catatan update pengumpulan tugas test"
      );
    } catch (error) {
      throw error;
    }
  });

  // Delete
  it("should delete pengumpulan tugas", async () => {
    if (!createdPengumpulanTugas) {
      return;
    }

    try {
      const { kd_pengumpulan_tugas } = createdPengumpulanTugas;
      const res = await request(app)
        .delete(`/api/pengumpulan-tugas/${kd_pengumpulan_tugas}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty(
        "message",
        "Pengumpulan tugas berhasil dihapus"
      );
    } catch (error) {
      throw error;
    }
  });
});
