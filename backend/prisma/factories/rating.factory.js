const { faker } = require("@faker-js/faker");

function ratingFactory(override = {}) {
  return {
    kd_pengumpulan_tugas: override.kd_pengumpulan_tugas,
    nilai: faker.number.float({ min: 60, max: 100 }),
    komentar: faker.lorem.sentence(),
    ...override,
  };
}

module.exports = { ratingFactory };
