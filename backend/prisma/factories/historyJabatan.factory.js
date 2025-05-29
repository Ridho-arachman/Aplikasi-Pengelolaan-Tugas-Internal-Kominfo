const { faker } = require("@faker-js/faker");

function historyJabatanFactory(override = {}) {
  const tanggalMulai = faker.date.past({ years: 2 });
  const tanggalAkhir = faker.datatype.boolean()
    ? faker.date.between({ from: tanggalMulai, to: new Date() })
    : null;
  return {
    user_nip: override.user_nip,
    kd_jabatan: override.kd_jabatan,
    tanggal_mulai: tanggalMulai,
    tanggal_akhir: tanggalAkhir,
    ...override,
  };
}

module.exports = { historyJabatanFactory };
