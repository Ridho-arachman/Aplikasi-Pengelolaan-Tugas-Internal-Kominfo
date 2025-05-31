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

/**
 * Integration test untuk HistoryJabatan routes
 * Test ini mencakup operasi CRUD untuk HistoryJabatan
 */
describe("Integration test for HistoryJabatan routes", () => {
  let accessToken;
  let adminAccessToken;
  let userNip;
  let jabatanKode;
  let createdHistoryJabatan;

  beforeAll(async () => {
    // Setup test user and admin
    const { testUserNip, testUserKdJabatan } = await setupTestUser();
    userNip = testUserNip;
    jabatanKode = testUserKdJabatan;

    await setupTestAdmin();

    // Get tokens
    const { accessToken: userToken } = await getAuthToken();
    const { accessToken: adminToken } = await getAdminAuthToken();
    accessToken = userToken;
    adminAccessToken = adminToken;
  });

  afterAll(async () => {
    await cleanupTestData();
    await prisma.$disconnect();
  });

  // Create
  it("should create a new HistoryJabatan", async () => {
    const data = {
      user_nip: userNip,
      kd_jabatan: jabatanKode,
      tanggal_mulai: new Date().toISOString(),
    };

    const res = await request(app)
      .post("/api/history-jabatan")
      .set("Authorization", `Bearer ${adminAccessToken}`)
      .send(data);

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
  });

  // Get by ID
  it("should return specific history jabatan", async () => {
    if (!createdHistoryJabatan) {
      return;
    }

    const { id } = createdHistoryJabatan;
    const res = await request(app)
      .get(`/api/history-jabatan/${id}`)
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body).toHaveProperty(
      "message",
      "History jabatan berhasil ditemukan"
    );
    expect(res.body.data).toHaveProperty("id", id);
    expect(res.body.data).toHaveProperty("user_nip", userNip);
    expect(res.body.data).toHaveProperty("kd_jabatan", jabatanKode);
  });

  // Get All
  it("should return all history jabatan", async () => {
    const res = await request(app)
      .get("/api/history-jabatan")
      .set("Authorization", `Bearer ${accessToken}`);

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
  });

  // Update
  it("should update history jabatan", async () => {
    if (!createdHistoryJabatan) {
      return;
    }

    const { id } = createdHistoryJabatan;
    const tanggal_akhir = new Date();
    tanggal_akhir.setDate(tanggal_akhir.getDate() + 30); // 30 hari dari sekarang

    const updateData = {
      tanggal_akhir: tanggal_akhir.toISOString(),
    };

    const res = await request(app)
      .put(`/api/history-jabatan/${id}`)
      .set("Authorization", `Bearer ${adminAccessToken}`)
      .send(updateData);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body).toHaveProperty(
      "message",
      "History jabatan berhasil diperbarui"
    );
    expect(res.body.data).toHaveProperty("tanggal_akhir");
  });

  // Delete
  it("should delete history jabatan", async () => {
    if (!createdHistoryJabatan) {
      return;
    }

    const { id } = createdHistoryJabatan;
    const res = await request(app)
      .delete(`/api/history-jabatan/${id}`)
      .set("Authorization", `Bearer ${adminAccessToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body).toHaveProperty(
      "message",
      "History jabatan berhasil dihapus"
    );
  });
});
