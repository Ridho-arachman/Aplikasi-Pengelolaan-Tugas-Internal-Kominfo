const { faker } = require("@faker-js/faker");

function tugasFactory(override = {}) {
  return {
    judul: faker.lorem.sentence(3),
    deskripsi: faker.lorem.paragraph(),
    user_nip: override.user_nip,
    status: "pending",
    deadline: faker.date.soon({ days: 10 }),
    prioritas: faker.helpers.arrayElement(["tinggi", "sedang", "rendah"]),
    ...override,
  };
}

module.exports = { tugasFactory };
