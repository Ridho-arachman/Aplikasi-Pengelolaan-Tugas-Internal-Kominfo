const request = require("supertest");
const app = require("../../../app");
const prisma = require("../../libs/prisma");
const { createPassword } = require("../../services/hash.service");

let testUserNip;
let testUserPassword = "Password123!";
let testUserKdJabatan;

async function setupTestUser() {
  // Create a Jabatan for the test user
  const jabatan = await prisma.jabatan.create({
    data: {
      nama_jabatan: `Test Jabatan ${Date.now()}`,
    },
  });
  testUserKdJabatan = jabatan.kd_jabatan;

  // Create a test user
  const hashedPassword = await createPassword(testUserPassword);
  testUserNip = `test${Date.now()}`.slice(0, 18).padEnd(18, "0");

  await prisma.user.create({
    data: {
      nip: testUserNip,
      nama: "Test User",
      password: hashedPassword,
      role: "user",
      kd_jabatan: testUserKdJabatan,
    },
  });

  return { testUserNip, testUserPassword, testUserKdJabatan };
}

const cleanupTestData = async () => {
  try {
    await prisma.$transaction([
      prisma.pengumpulanTugas.deleteMany({}),
      prisma.rating.deleteMany({}),
      prisma.tugas.deleteMany({}),
      prisma.user.deleteMany({}),
      prisma.jabatan.deleteMany({}),
    ]);
  } catch (error) {
    console.error("Error cleaning up test data:", error);
  } finally {
    await prisma.$disconnect();
  }
};

async function getAuthToken() {
  const loginResponse = await request(app).post("/api/auth/login").send({
    nip: testUserNip,
    password: testUserPassword,
  });

  if (loginResponse.status !== 200) {
    throw new Error("Failed to get auth token");
  }

  return {
    accessToken: loginResponse.body.data.accessToken,
    refreshToken: loginResponse.body.data.refreshToken,
  };
}

module.exports = {
  setupTestUser,
  cleanupTestData,
  getAuthToken,
};
