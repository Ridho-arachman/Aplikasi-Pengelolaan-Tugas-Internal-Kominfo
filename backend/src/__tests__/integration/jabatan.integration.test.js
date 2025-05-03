const request = require("supertest");
const app = require("../../../app");
const prisma = require("../../lib/prisma");

describe("Integration test for Jabatan routes", () => {
  beforeAll(async () => {
    await prisma.jabatan.deleteMany();
  });

  let createdJabatan;

  // Create
  it("should create a new jabatan", async () => {
    const res = await request(app)
      .post("/api/jabatan")
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
    const res = await request(app).get("/api/jabatan");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body.data.length).toBeGreaterThan(0);
    res.body.data.forEach((jabatan) => {
      expect(jabatan).toHaveProperty("kd_jabatan", createdJabatan.kd_jabatan);
      expect(jabatan).toHaveProperty(
        "nama_jabatan",
        createdJabatan.nama_jabatan
      );
    });
  });

  // Get By ID
  it("should return specific jabatan", async () => {
    const { kd_jabatan, nama_jabatan } = createdJabatan;
    const res = await request(app).get(`/api/jabatan/${kd_jabatan}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body.data).toHaveProperty("kd_jabatan", kd_jabatan);
    expect(res.body.data).toHaveProperty("nama_jabatan", nama_jabatan);
  });

  // Update
  it("should update jabatan name", async () => {
    const res = await request(app)
      .put(`/api/jabatan/${createdJabatan.kd_jabatan}`)
      .send({ nama_jabatan: "Kepala Bidang TI" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body.data.nama_jabatan).toBe("Kepala Bidang TI");
  });

  // Delete
  it("should delete jabatan", async () => {
    const res = await request(app).delete(
      `/api/jabatan/${createdJabatan.kd_jabatan}`
    );
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "success");
    expect(res.body).toHaveProperty("message", "Jabatan berhasil dihapus");
  });

  // Confirm deletion
  it("should not find deleted jabatan", async () => {
    const res = await request(app).get(
      `/api/jabatan/${createdJabatan.kd_jabatan}`
    );
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message", "Jabatan tidak ditemukan");
  });
});
