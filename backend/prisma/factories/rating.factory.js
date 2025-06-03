const { faker } = require("@faker-js/faker");

function ratingFactory(override = {}) {
  return {
    kd_pengumpulan_tugas: override.kd_pengumpulan_tugas || faker.string.uuid(),
    nilai: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
    komentar: faker.lorem.sentence(),
    ...override,
  };
}

module.exports = { ratingFactory };
