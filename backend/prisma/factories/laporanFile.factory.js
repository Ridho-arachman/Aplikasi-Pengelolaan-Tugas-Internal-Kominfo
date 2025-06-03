const { faker } = require("@faker-js/faker");

function laporanFileFactory(override = {}) {
  return {
    kd_laporan: override.kd_laporan || faker.string.uuid(),
    file_path: faker.system.filePath(),
    file_name: faker.system.fileName(),
    file_type: faker.helpers.arrayElement([
      "pdf",
      "doc",
      "docx",
      "xls",
      "xlsx",
    ]),
    file_size: faker.number.int({ min: 1000, max: 10000000 }),
    ...override,
  };
}

module.exports = { laporanFileFactory };
