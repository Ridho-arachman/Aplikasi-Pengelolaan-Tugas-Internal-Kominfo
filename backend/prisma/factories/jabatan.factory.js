const { faker } = require("@faker-js/faker");

function jabatanFactory(override = {}) {
  return {
    nama_jabatan: faker.person.jobTitle() + " " + faker.string.alphanumeric(5),
    ...override,
  };
}

module.exports = { jabatanFactory };
