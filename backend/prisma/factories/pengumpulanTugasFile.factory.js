const { faker } = require("@faker-js/faker");

function pengumpulanTugasFileFactory(override = {}) {
  return {
    kd_pengumpulan_tugas: override.kd_pengumpulan_tugas || faker.string.uuid(),
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

module.exports = { pengumpulanTugasFileFactory };
