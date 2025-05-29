const { faker } = require("@faker-js/faker");

function jabatanFactory(override = {}) {
  return {
    nama_jabatan: faker.person.jobTitle(),
    ...override,
  };
}

module.exports = { jabatanFactory };
