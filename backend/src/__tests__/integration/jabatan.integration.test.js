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

describe("Integration test for Jabatan routes", () => {
  let accessToken;
  let adminAccessToken;
  let createdJabatan;

  beforeAll(async () => {
    try {
      // Setup test user dan admin
      await setupTestUser();
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

  // Create
  it("should create a new jabatan", async () => {
    const res = await request(app)
      .post("/api/jabatan")
      .set("Authorization", `Bearer ${adminAccessToken}`)
      .send({ nama_jabatan: "Kepala Seksi IT" });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("message", "Jabatan berhasil dibuat");
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body.data).toHaveProperty("kd_jabatan");
    expect(res.body.data).toHaveProperty("nama_jabatan", "Kepala Seksi IT");

    createdJabatan = res.body.data;
  });

  // Get All
  it("should return all jabatans", async () => {
    // Skip if previous test failed
    if (!createdJabatan) {
      return;
    }

    const res = await request(app)
      .get("/api/jabatan")
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body.data.length).toBeGreaterThan(0);

    // Check if at least one jabatan matches our created one
    const foundJabatan = res.body.data.find(
      (jabatan) => jabatan.kd_jabatan === createdJabatan.kd_jabatan
    );
    expect(foundJabatan).toBeTruthy();
    expect(foundJabatan.nama_jabatan).toBe(createdJabatan.nama_jabatan);
  });

  // Get By ID
  it("should return specific jabatan", async () => {
    if (!createdJabatan) {
      return;
    }

    const { kd_jabatan, nama_jabatan } = createdJabatan;
    const res = await request(app)
      .get(`/api/jabatan/${kd_jabatan}`)
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body.data).toHaveProperty("kd_jabatan", kd_jabatan);
    expect(res.body.data).toHaveProperty("nama_jabatan", nama_jabatan);
  });

  // Update
  it("should update jabatan name", async () => {
    if (!createdJabatan) {
      return;
    }

    const res = await request(app)
      .put(`/api/jabatan/${createdJabatan.kd_jabatan}`)
      .set("Authorization", `Bearer ${adminAccessToken}`)
      .send({ nama_jabatan: "Kepala Bidang TI" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body.data.nama_jabatan).toBe("Kepala Bidang TI");
  });

  // Delete
  it("should delete jabatan", async () => {
    if (!createdJabatan) {
      return;
    }

    const res = await request(app)
      .delete(`/api/jabatan/${createdJabatan.kd_jabatan}`)
      .set("Authorization", `Bearer ${adminAccessToken}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body).toHaveProperty("message", "Jabatan berhasil dihapus");
  });

  // Confirm deletion
  it("should not find deleted jabatan", async () => {
    if (!createdJabatan) {
      return;
    }

    const res = await request(app)
      .get(`/api/jabatan/${createdJabatan.kd_jabatan}`)
      .set("Authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message", "Jabatan tidak ditemukan");
  });
});
