const { faker } = require("@faker-js/faker");

function pengumpulanTugasImageFactory(override = {}) {
  return {
    kd_pengumpulan_tugas: override.kd_pengumpulan_tugas || faker.string.uuid(),
    image_path: faker.system.filePath(),
    image_name: faker.system.fileName(),
    image_type: faker.helpers.arrayElement(["jpg", "jpeg", "png"]),
    image_size: faker.number.int({ min: 1000, max: 5000000 }),
    ...override,
  };
}

module.exports = { pengumpulanTugasImageFactory };
