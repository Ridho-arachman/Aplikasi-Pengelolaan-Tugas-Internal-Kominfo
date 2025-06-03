const { faker } = require("@faker-js/faker");
const bcrypt = require("bcrypt");

async function userFactory(override = {}) {
  const password = await bcrypt.hash("password123", 10);
  return {
    nip: faker.string.numeric({ length: 18 }),
    nama: faker.person.fullName(),
    password,
    role: "user",
    kd_jabatan: override.kd_jabatan || faker.string.uuid(),
    nip_atasan: null,
    image: null,
    ...override,
  };
}

module.exports = { userFactory };
