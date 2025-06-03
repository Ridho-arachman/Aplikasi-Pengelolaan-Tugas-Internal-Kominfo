const { faker } = require("@faker-js/faker");

function historyJabatanFactory(override = {}) {
  const tanggal_mulai = faker.date.past();
  const tanggal_akhir = faker.date.between({
    from: tanggal_mulai,
    to: new Date(),
  });

  return {
    user_nip: override.user_nip || faker.string.numeric({ length: 18 }),
    kd_jabatan: override.kd_jabatan || faker.string.uuid(),
    tanggal_mulai,
    tanggal_akhir,
    ...override,
  };
}

module.exports = { historyJabatanFactory };
