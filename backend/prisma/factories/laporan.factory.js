const { faker } = require("@faker-js/faker");

function laporanFactory(override = {}) {
  return {
    isi_laporan: faker.lorem.paragraphs(),
    judul_laporan: faker.lorem.sentence(),
    user_nip: override.user_nip || faker.string.numeric({ length: 18 }),
    ...override,
  };
}

module.exports = { laporanFactory };
