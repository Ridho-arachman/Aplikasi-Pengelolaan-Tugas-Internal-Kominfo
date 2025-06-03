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
const path = require("path");

// Tambahkan timeout yang lebih panjang untuk Jest
jest.setTimeout(60000); // 60 detik

describe("Integration test for User routes", () => {
  let accessToken;
  let adminAccessToken;
  let userNip;
  let jabatanKode;
  let createdUserWithoutImage;
  let createdUserWithImage;

  beforeAll(async () => {
    try {
      // Setup test user dan admin
      const { testUserNip, testUserKdJabatan } = await setupTestUser();
      userNip = testUserNip;
      jabatanKode = testUserKdJabatan;

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
  it("should create a new User without image", async () => {
    try {
      // Gunakan timestamp untuk membuat nama jabatan yang unik
      const uniqueJabatanName = `Kepala Seksi IT ${Date.now()}`;

      const resJabatan = await request(app)
        .post("/api/jabatan")
        .set("Authorization", `Bearer ${adminAccessToken}`)
        .send({ nama_jabatan: uniqueJabatanName });

      expect(resJabatan.status).toBe(201);
      expect(resJabatan.body.data).toHaveProperty("kd_jabatan");

      jabatanKode = resJabatan.body.data.kd_jabatan;

      const res = await request(app)
        .post("/api/user")
        .set("Authorization", `Bearer ${adminAccessToken}`)
        .send({
          nip: "123456789012385282",
          nama: "John Doe",
          password: "Password123!",
          role: "admin",
          kd_jabatan: jabatanKode,
        });

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("message", "User berhasil dibuat");
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body.data).toHaveProperty("nip", "123456789012385282");
      expect(res.body.data).toHaveProperty("nama", "John Doe");
      expect(res.body.data).toHaveProperty("role", "admin");
      expect(res.body.data).toHaveProperty("kd_jabatan", jabatanKode);
      expect(res.body.data).toHaveProperty("image", null);

      createdUserWithoutImage = res.body.data;
    } catch (error) {
      throw error;
    }
  });

  // Create with image
  it("should create a new User with image", async () => {
    try {
      const uniqueJabatanName = `Kepala Seksi IT ${Date.now()}`;

      const resJabatan = await request(app)
        .post("/api/jabatan")
        .set("Authorization", `Bearer ${adminAccessToken}`)
        .send({ nama_jabatan: uniqueJabatanName });

      expect(resJabatan.status).toBe(201);
      jabatanKode = resJabatan.body.data.kd_jabatan;

      const res = await request(app)
        .post("/api/user")
        .set("Authorization", `Bearer ${adminAccessToken}`)
        .attach("image", path.join(__dirname, "../fixtures/test-image.png"))
        .field("nip", "123456789012385283")
        .field("nama", "Jane Doe")
        .field("password", "Password123!")
        .field("role", "user")
        .field("kd_jabatan", jabatanKode);

      expect(res.status).toBe(201);
      expect(res.body).toHaveProperty("message", "User berhasil dibuat");
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body.data).toHaveProperty("nip", "123456789012385283");
      expect(res.body.data).toHaveProperty("nama", "Jane Doe");
      expect(res.body.data).toHaveProperty("role", "user");
      expect(res.body.data).toHaveProperty("kd_jabatan", jabatanKode);
      expect(res.body.data).toHaveProperty("image");
      expect(res.body.data.image).toContain("cloudinary.com");

      createdUserWithImage = res.body.data;
    } catch (error) {
      throw error;
    }
  });

  // Get by NIP
  it("should return specific user without image", async () => {
    if (!createdUserWithoutImage) {
      return;
    }

    try {
      const { nip } = createdUserWithoutImage;
      const res = await request(app)
        .get(`/api/user/${nip}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "User berhasil ditemukan");
      expect(res.body.data).toHaveProperty("nip", nip);
      expect(res.body.data).toHaveProperty("nama", "John Doe");
      expect(res.body.data).toHaveProperty("image", null);
    } catch (error) {
      throw error;
    }
  });

  // Get by NIP
  it("should return specific user with image", async () => {
    if (!createdUserWithImage) {
      return;
    }

    try {
      const { nip } = createdUserWithImage;
      const res = await request(app)
        .get(`/api/user/${nip}`)
        .set("Authorization", `Bearer ${accessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "User berhasil ditemukan");
      expect(res.body.data).toHaveProperty("nip", nip);
      expect(res.body.data).toHaveProperty("nama", "Jane Doe");
      expect(res.body.data).toHaveProperty("image");
      expect(res.body.data.image).toContain("cloudinary.com");
    } catch (error) {
      throw error;
    }
  });

  // Get All Users
  it("should return all users", async () => {
    try {
      const res = await request(app)
        .get("/api/user")
        .set("Authorization", `Bearer ${accessToken}`);

      if (res.status === 404) {
        expect(res.body).toHaveProperty("status", "error");
        expect(res.body).toHaveProperty(
          "message",
          "Tidak ada user yang ditemukan"
        );
      } else {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("status", "success");
        expect(res.body).toHaveProperty(
          "message",
          "Daftar user berhasil ditemukan"
        );
        expect(Array.isArray(res.body.data)).toBe(true);
        expect(res.body.data.length).toBeGreaterThan(0);

        // Cek user tanpa image
        const userWithoutImage = res.body.data.find(
          (user) => user.nip === createdUserWithoutImage.nip
        );
        expect(userWithoutImage).toBeDefined();
        expect(userWithoutImage.image).toBeNull();

        // Cek user dengan image
        const userWithImage = res.body.data.find(
          (user) => user.nip === createdUserWithImage.nip
        );
        expect(userWithImage).toBeDefined();
        expect(userWithImage.image).toContain("cloudinary.com");
      }
    } catch (error) {
      throw error;
    }
  });

  // Update User without image
  it("should update user data without image", async () => {
    if (!createdUserWithoutImage) {
      return;
    }

    try {
      const { nip } = createdUserWithoutImage;
      const updateData = {
        nama: "John Updated",
        password: "NewPassword123!",
        role: "user",
        kd_jabatan: jabatanKode,
      };

      const res = await request(app)
        .put(`/api/user/${nip}`)
        .set("Authorization", `Bearer ${adminAccessToken}`)
        .send(updateData);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "User berhasil diperbarui");
      expect(res.body.data).toHaveProperty("nama", "John Updated");
      expect(res.body.data).toHaveProperty("image", null);
    } catch (error) {
      throw error;
    }
  });

  // Update User with image
  it("should update user data with image", async () => {
    if (!createdUserWithImage) {
      return;
    }

    try {
      const { nip } = createdUserWithImage;
      const res = await request(app)
        .put(`/api/user/${nip}`)
        .set("Authorization", `Bearer ${adminAccessToken}`)
        .attach("image", path.join(__dirname, "../fixtures/test-image.png"))
        .field("nama", "Jane Updated With Image")
        .field("password", "NewPassword123!")
        .field("role", "user")
        .field("kd_jabatan", jabatanKode);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "User berhasil diperbarui");
      expect(res.body.data).toHaveProperty("nama", "Jane Updated With Image");
      expect(res.body.data).toHaveProperty("image");
      expect(res.body.data.image).toContain("cloudinary.com");
    } catch (error) {
      throw error;
    }
  });

  // Delete User without image
  it("should delete user without image", async () => {
    if (!createdUserWithoutImage) {
      return;
    }

    try {
      const { nip } = createdUserWithoutImage;
      const res = await request(app)
        .delete(`/api/user/${nip}`)
        .set("Authorization", `Bearer ${adminAccessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "User berhasil dihapus");
    } catch (error) {
      throw error;
    }
  });

  // Delete User with image
  it("should delete user with image", async () => {
    if (!createdUserWithImage) {
      return;
    }

    try {
      const { nip } = createdUserWithImage;
      const res = await request(app)
        .delete(`/api/user/${nip}`)
        .set("Authorization", `Bearer ${adminAccessToken}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("status", "success");
      expect(res.body).toHaveProperty("message", "User berhasil dihapus");
    } catch (error) {
      throw error;
    }
  });
});
