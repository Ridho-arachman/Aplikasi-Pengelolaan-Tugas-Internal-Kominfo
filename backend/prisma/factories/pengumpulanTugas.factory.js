const { faker } = require("@faker-js/faker");

function pengumpulanTugasFactory(override = {}) {
  return {
    kd_tugas: override.kd_tugas,
    user_nip: override.user_nip,
    tanggal_pengumpulan: faker.date.recent(),
    file_path: faker.system.filePath(),
    catatan: faker.lorem.sentence(),
    status: "menunggu",
    ...override,
  };
}

module.exports = { pengumpulanTugasFactory };
