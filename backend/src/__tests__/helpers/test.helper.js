const request = require("supertest");
const app = require("../../../app");
const prisma = require("../../libs/prisma");
const { createPassword } = require("../../services/hash.service");

let testUserNip;
let testUserPassword = "Password123!";
let testUserKdJabatan;
let testAdminNip;
let testAdminPassword = "Admin123!";
let testAdminKdJabatan;

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

async function setupTestAdmin() {
  // Create a Jabatan for the test admin
  const jabatan = await prisma.jabatan.create({
    data: {
      nama_jabatan: `Test Admin Jabatan ${Date.now()}`,
    },
  });
  testAdminKdJabatan = jabatan.kd_jabatan;

  // Create a test admin
  const hashedPassword = await createPassword(testAdminPassword);
  testAdminNip = `admin${Date.now()}`.slice(0, 18).padEnd(18, "0");

  await prisma.user.create({
    data: {
      nip: testAdminNip,
      nama: "Test Admin",
      password: hashedPassword,
      role: "admin",
      kd_jabatan: testAdminKdJabatan,
    },
  });

  return { testAdminNip, testAdminPassword, testAdminKdJabatan };
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

async function getAdminAuthToken() {
  const loginResponse = await request(app).post("/api/auth/login").send({
    nip: testAdminNip,
    password: testAdminPassword,
  });

  if (loginResponse.status !== 200) {
    throw new Error("Failed to get admin auth token");
  }

  return {
    accessToken: loginResponse.body.data.accessToken,
    refreshToken: loginResponse.body.data.refreshToken,
  };
}

module.exports = {
  setupTestUser,
  setupTestAdmin,
  cleanupTestData,
  getAuthToken,
  getAdminAuthToken,
};
