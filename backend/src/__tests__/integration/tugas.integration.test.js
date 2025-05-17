const request = require("supertest");
const app = require("../../../app");
const prisma = require("../../libs/prisma");

// Tambahkan timeout yang lebih panjang untuk Jest
jest.setTimeout(60000); // 60 detik

describe("Integration test for Tugas routes", () => {
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

  let createdTugas;
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
        console.log(
          "Membuat jabatan dengan Prisma (transaksi):",
          uniqueJabatanName
        );

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

        console.log(
          "Verifikasi Jabatan dengan Prisma (transaksi):",
          verifyJabatan
        );

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

  // Create Tugas
  it("should create a new Tugas", async () => {
    // Skip test jika userNip tidak ada
    if (!userNip) {
      console.log("Skipping test: user not created");
      return;
    }

    try {
      const data = {
        judul: "Membuat Laporan Bulanan",
        deskripsi: "Membuat laporan kinerja bulanan",
        user_nip: userNip,
        deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 hari dari sekarang
        prioritas: "tinggi",
      };

      console.log("Data untuk membuat Tugas:", data);

      const res = await request(app).post("/api/tugas").send(data);

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
      const res = await request(app).get(`/api/tugas/${kd_tugas}`);

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
      const res = await request(app).get("/api/tugas");

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
      console.error("Error saat memperbarui Tugas:", error);
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
      const res = await request(app).delete(`/api/tugas/${kd_tugas}`);

      console.log("Respon Delete:", res.body);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "Tugas berhasil dihapus");
    } catch (error) {
      console.error("Error saat menghapus Tugas:", error);
      throw error;
    }
  });

  // Confirm deletion
  it("should not find deleted tugas", async () => {
    if (!createdTugas) {
      console.log("Skipping test: tugas not created");
      return;
    }

    try {
      const { kd_tugas } = createdTugas;
      const res = await request(app).get(`/api/tugas/${kd_tugas}`);

      console.log("Respon Get Deleted:", res.body);

      expect(res.status).toBe(404);
      expect(res.body).toHaveProperty("status", "error");
      expect(res.body).toHaveProperty("message", "Tugas tidak ditemukan");
    } catch (error) {
      console.error("Error saat mencari Tugas yang sudah dihapus:", error);
      throw error;
    }
  });
});
