const { faker } = require("@faker-js/faker");

function pengumpulanTugasFactory(override = {}) {
  return {
    kd_tugas: override.kd_tugas || faker.string.uuid(),
    user_nip: override.user_nip || faker.string.numeric({ length: 18 }),
    tanggal_pengumpulan: faker.date.recent(),
    catatan: faker.lorem.paragraph(),
    status: "menunggu",
    ...override,
  };
}

module.exports = { pengumpulanTugasFactory };
