const request = require("supertest");
const app = require("../../../app");
const prisma = require("../../libs/prisma");

// Tambahkan timeout yang lebih panjang untuk Jest
jest.setTimeout(60000); // 60 detik

describe("Integration test for PengumpulanTugas routes", () => {
  // Helper function untuk membersihkan database
  async function cleanupDatabase() {
    try {
      await prisma.pengumpulanTugas.deleteMany();
      await prisma.tugas.deleteMany();
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

  let createdPengumpulanTugas;
  let userNip;
  let jabatanKode;
  let tugasKode;

  // Create prerequisites
  it("should create prerequisites (jabatan, user, and tugas)", async () => {
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

        // Buat tugas dengan transaksi yang sama
        console.log("Membuat tugas dengan Prisma (transaksi)...");
        const tugas = await tx.tugas.create({
          data: {
            judul: "Tugas Test untuk Pengumpulan",
            deskripsi: "Deskripsi tugas test untuk pengumpulan",
            user_nip: userNip,
            status: "pending",
            deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 hari dari sekarang
            prioritas: "tinggi",
          },
        });

        console.log("Tugas dibuat dengan Prisma (transaksi):", tugas);
        tugasKode = tugas.kd_tugas;
      });

      // Verifikasi bahwa userNip dan tugasKode tidak undefined
      expect(userNip).toBeDefined();
      expect(tugasKode).toBeDefined();
      console.log("User NIP yang akan digunakan:", userNip);
      console.log("Tugas Kode yang akan digunakan:", tugasKode);

      // Verifikasi lagi setelah transaksi selesai
      const verifyJabatanAfter = await prisma.jabatan.findUnique({
        where: { kd_jabatan: jabatanKode },
      });
      console.log("Verifikasi Jabatan setelah transaksi:", verifyJabatanAfter);

      const verifyUserAfter = await prisma.user.findUnique({
        where: { nip: userNip },
      });
      console.log("Verifikasi User setelah transaksi:", verifyUserAfter);

      const verifyTugasAfter = await prisma.tugas.findUnique({
        where: { kd_tugas: tugasKode },
      });
      console.log("Verifikasi Tugas setelah transaksi:", verifyTugasAfter);

      console.log("=== Prerequisite berhasil dibuat ===");
    } catch (error) {
      console.error("Error saat membuat prerequisite:", error);
      throw error;
    }
  });

  // Create PengumpulanTugas
  it("should create a new PengumpulanTugas", async () => {
    // Skip test jika userNip atau tugasKode tidak ada
    if (!userNip || !tugasKode) {
      console.log("Skipping test: user or tugas not created");
      return;
    }

    try {
      const data = {
        kd_tugas: tugasKode,
        user_nip: userNip,
        tanggal_pengumpulan: new Date().toISOString(),
        file_path: "/path/to/test/file.pdf",
        catatan: "Catatan pengumpulan tugas test",
        status: "menunggu",
      };

      console.log("Data untuk membuat PengumpulanTugas:", data);

      const res = await request(app).post("/api/pengumpulan-tugas").send(data);

      console.log("Respon Create PengumpulanTugas:", res.body);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("message", "Pengumpulan tugas berhasil dibuat");
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body.data).toHaveProperty("kd_pengumpulan_tugas");
      expect(res.body.data).toHaveProperty("kd_tugas", tugasKode);
      expect(res.body.data).toHaveProperty("user_nip", userNip);
      expect(res.body.data).toHaveProperty("status", "menunggu");

      createdPengumpulanTugas = res.body.data;
    } catch (error) {
      console.error("Error saat membuat PengumpulanTugas:", error);
      throw error;
    }
  });

  // Get by ID
  it("should return specific pengumpulan tugas", async () => {
    if (!createdPengumpulanTugas) {
      console.log("Skipping test: pengumpulan tugas not created");
      return;
    }

    try {
      const { kd_pengumpulan_tugas } = createdPengumpulanTugas;
      const res = await request(app).get(`/api/pengumpulan-tugas/${kd_pengumpulan_tugas}`);

      console.log("Respon Get by ID:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Pengumpulan tugas berhasil ditemukan");
      expect(res.body.data).toHaveProperty("kd_pengumpulan_tugas", kd_pengumpulan_tugas);
      expect(res.body.data).toHaveProperty("kd_tugas", tugasKode);
      expect(res.body.data).toHaveProperty("user_nip", userNip);
    } catch (error) {
      console.error("Error saat mendapatkan PengumpulanTugas by ID:", error);
      throw error;
    }
  });

  // Get All
  it("should return all pengumpulan tugas", async () => {
    try {
      const res = await request(app).get("/api/pengumpulan-tugas");

      console.log("Respon Get All:", res.body);

      if (res.status === 404) {
        expect(res.body).toHaveProperty("status", "error");
        expect(res.body).toHaveProperty("message", "Tidak ada pengumpulan tugas yang ditemukan");
      } else {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("status", "success");
        expect(res.body).toHaveProperty("message", "Daftar pengumpulan tugas berhasil ditemukan");
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);
      }
    } catch (error) {
      console.error("Error saat mendapatkan semua PengumpulanTugas:", error);
      throw error;
    }
  });

  // Update
  it("should update pengumpulan tugas", async () => {
    if (!createdPengumpulanTugas) {
      console.log("Skipping test: pengumpulan tugas not created");
      return;
    }

    try {
      const { kd_pengumpulan_tugas } = createdPengumpulanTugas;
      const updateData = {
        catatan: "Catatan pengumpulan tugas yang diperbarui",
        status: "disetujui",
      };

      const res = await request(app)
        .put(`/api/pengumpulan-tugas/${kd_pengumpulan_tugas}`)
        .send(updateData);

      console.log("Respon Update:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Pengumpulan tugas berhasil diperbarui");
      expect(res.body.data).toHaveProperty("catatan", updateData.catatan);
      expect(res.body.data).toHaveProperty("status", updateData.status);
    } catch (error) {
      console.error("Error saat memperbarui PengumpulanTugas:", error);
      throw error;
    }
  });

  // Delete
  it("should delete pengumpulan tugas", async () => {
    if (!createdPengumpulanTugas) {
      console.log("Skipping test: pengumpulan tugas not created");
      return;
    }

    try {
      const { kd_pengumpulan_tugas } = createdPengumpulanTugas;
      const res = await request(app).delete(`/api/pengumpulan-tugas/${kd_pengumpulan_tugas}`);

      console.log("Respon Delete:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Pengumpulan tugas berhasil dihapus");
    } catch (error) {
      console.error("Error saat menghapus PengumpulanTugas:", error);
      throw error;
    }
  });

  // Confirm deletion
  it("should not find deleted pengumpulan tugas", async () => {
    if (!createdPengumpulanTugas) {
      console.log("Skipping test: pengumpulan tugas not created");
      return;
    }

    try {
      const { kd_pengumpulan_tugas } = createdPengumpulanTugas;
      const res = await request(app).get(`/api/pengumpulan-tugas/${kd_pengumpulan_tugas}`);

      console.log("Respon Get After Delete:", res.body);

      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty("status", "error");
      expect(res.body).toHaveProperty("message", "Pengumpulan tugas tidak ditemukan");
    } catch (error) {
      console.error("Error saat memverifikasi penghapusan PengumpulanTugas:", error);
      throw error;
    }
  });
});