const { faker } = require("@faker-js/faker");

function laporanFactory(override = {}) {
  return {
    isi_laporan: faker.lorem.paragraph(),
    judul_laporan: faker.lorem.sentence(4),
    user_nip: override.user_nip,
    ...override,
  };
}

module.exports = { laporanFactory };
