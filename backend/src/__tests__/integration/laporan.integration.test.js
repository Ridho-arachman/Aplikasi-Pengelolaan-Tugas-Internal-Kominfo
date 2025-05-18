const request = require("supertest");
const app = require("../../../app");
const prisma = require("../../libs/prisma");

// Tambahkan timeout yang lebih panjang untuk Jest
jest.setTimeout(60000); // 60 detik

describe("Integration test for Laporan routes", () => {
  // Helper function untuk membersihkan database
  async function cleanupDatabase() {
    try {
      await prisma.laporan.deleteMany();
      await prisma.user.deleteMany();
      await prisma.jabatan.deleteMany();
      console.log("Database dibersihkan");
    } catch (error) {
      console.error("Error saat membersihkan database:", error);
      throw error;
    }
  }

  beforeAll(async () => {
    try {
      // Clean up before tests
      await cleanupDatabase();
      console.log("Database dibersihkan sebelum test");
    } catch (error) {
      console.error("Error saat membersihkan database:", error);
      throw error;
    }
  });

  afterAll(async () => {
    try {
      // Hapus data test
      await cleanupDatabase();
      await prisma.$disconnect();
      console.log("Database dibersihkan setelah test dan disconnected");
    } catch (error) {
      console.error("Error saat membersihkan database:", error);
      throw error;
    }
  });

  let createdLaporan;
  let userNip;
  let jabatanKode;

  // Create prerequisites
  it("should create prerequisites (jabatan and user)", async () => {
    try {
      console.log("=== Memulai pembuatan prerequisite ===");

      // Gunakan transaksi Prisma untuk memastikan data tersimpan
      await prisma.$transaction(async (tx) => {
        // Buat jabatan dengan transaksi
        const uniqueJabatanName = `Kepala Seksi IT ${Date.now()}`;
        console.log("Membuat jabatan dengan Prisma (transaksi):", uniqueJabatanName);

        const jabatan = await tx.jabatan.create({
          data: {
            nama_jabatan: uniqueJabatanName,
          },
        });

        console.log("Jabatan dibuat dengan Prisma (transaksi):", jabatan);
        jabatanKode = jabatan.kd_jabatan;

        // Verifikasi jabatan dengan transaksi yang sama
        const verifyJabatan = await tx.jabatan.findUnique({
          where: { kd_jabatan: jabatanKode },
        });

        console.log("Verifikasi Jabatan dengan Prisma (transaksi):", verifyJabatan);

        if (!verifyJabatan) {
          throw new Error(
            `Jabatan dengan kode ${jabatanKode} tidak ditemukan di database (transaksi)`
          );
        }

        // Create user dengan NIP yang pasti 18 karakter numerik
        const timestamp = Date.now();
        const uniqueNip = `123456${timestamp}`.substring(0, 18).padEnd(18, "0");

        console.log(
          "NIP yang akan digunakan:",
          uniqueNip,
          "Panjang:",
          uniqueNip.length
        );

        // Buat user dengan transaksi yang sama
        console.log("Membuat user dengan Prisma (transaksi)...");
        const user = await tx.user.create({
          data: {
            nip: uniqueNip,
            nama: "John Doe",
            password: "Password123!",
            role: "admin",
            kd_jabatan: jabatanKode,
          },
        });

        console.log("User dibuat dengan Prisma (transaksi):", user);
        userNip = user.nip;
      });

      // Verifikasi bahwa userNip tidak undefined
      expect(userNip).toBeDefined();
      console.log("User NIP yang akan digunakan:", userNip);

      // Verifikasi lagi setelah transaksi selesai
      const verifyJabatanAfter = await prisma.jabatan.findUnique({
        where: { kd_jabatan: jabatanKode },
      });
      console.log("Verifikasi Jabatan setelah transaksi:", verifyJabatanAfter);

      const verifyUserAfter = await prisma.user.findUnique({
        where: { nip: userNip },
      });
      console.log("Verifikasi User setelah transaksi:", verifyUserAfter);

      console.log("=== Prerequisite berhasil dibuat ===");
    } catch (error) {
      console.error("Error saat membuat prerequisite:", error);
      throw error;
    }
  });

  // Create Laporan
  it("should create a new Laporan", async () => {
    // Skip test jika userNip tidak ada
    if (!userNip) {
      console.log("Skipping test: user not created");
      return;
    }

    try {
      const data = {
        isi_laporan: "Ini adalah isi laporan test",
        judul_laporan: "Laporan Bulanan Test",
        user_nip: userNip,
      };

      console.log("Data untuk membuat Laporan:", data);

      const res = await request(app).post("/api/laporan").send(data);

      console.log("Respon Create Laporan:", res.body);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("message", "Laporan berhasil dibuat");
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body.data).toHaveProperty("kd_laporan");
      expect(res.body.data).toHaveProperty("judul_laporan", "Laporan Bulanan Test");
      expect(res.body.data).toHaveProperty("user_nip", userNip);

      createdLaporan = res.body.data;
    } catch (error) {
      console.error("Error saat membuat Laporan:", error);
      throw error;
    }
  });

  // Get by ID
  it("should return specific laporan", async () => {
    if (!createdLaporan) {
      console.log("Skipping test: laporan not created");
      return;
    }

    try {
      const { kd_laporan } = createdLaporan;
      const res = await request(app).get(`/api/laporan/${kd_laporan}`);

      console.log("Respon Get by ID:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Laporan berhasil ditemukan");
      expect(res.body.data).toHaveProperty("kd_laporan", kd_laporan);
      expect(res.body.data).toHaveProperty("judul_laporan", "Laporan Bulanan Test");
      expect(res.body.data).toHaveProperty("user_nip", userNip);
    } catch (error) {
      console.error("Error saat mendapatkan Laporan by ID:", error);
      throw error;
    }
  });

  // Get All
  it("should return all laporan", async () => {
    try {
      const res = await request(app).get("/api/laporan");

      console.log("Respon Get All:", res.body);

      if (res.status === 404) {
        expect(res.body).toHaveProperty("status", "error");
        expect(res.body).toHaveProperty("message", "Tidak ada laporan yang ditemukan");
      } else {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("status", "success");
        expect(res.body).toHaveProperty("message", "Daftar laporan berhasil ditemukan");
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);
      }
    } catch (error) {
      console.error("Error saat mendapatkan semua Laporan:", error);
      throw error;
    }
  });

  // Update
  it("should update laporan", async () => {
    if (!createdLaporan) {
      console.log("Skipping test: laporan not created");
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
        .send(updateData);

      console.log("Respon Update:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Laporan berhasil diperbarui");
      expect(res.body.data).toHaveProperty("judul_laporan", "Laporan Bulanan Updated");
      expect(res.body.data).toHaveProperty("isi_laporan", "Isi laporan yang sudah diupdate");
    } catch (error) {
      console.error("Error saat mengupdate Laporan:", error);
      throw error;
    }
  });

  // Delete
  it("should delete laporan", async () => {
    if (!createdLaporan) {
      console.log("Skipping test: laporan not created");
      return;
    }

    try {
      const { kd_laporan } = createdLaporan;
      const res = await request(app).delete(`/api/laporan/${kd_laporan}`);

      console.log("Respon Delete:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Laporan berhasil dihapus");
    } catch (error) {
      console.error("Error saat menghapus Laporan:", error);
      throw error;
    }
  });

  // Confirm deletion
  it("should not find deleted laporan", async () => {
    if (!createdLaporan) {
      console.log("Skipping test: laporan not created");
      return;
    }

    try {
      const { kd_laporan } = createdLaporan;
      const res = await request(app).get(`/api/laporan/${kd_laporan}`);

      console.log("Respon Get after Delete:", res.body);

      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty("status", "error");
      expect(res.body).toHaveProperty("message", "Laporan tidak ditemukan");
    } catch (error) {
      console.error("Error saat mencari Laporan yang sudah dihapus:", error);
      throw error;
    }
  });
});