const { faker } = require("@faker-js/faker");

function tugasFactory(override = {}) {
  const prioritas = ["tinggi", "sedang", "rendah"][
    Math.floor(Math.random() * 3)
  ];
  return {
    judul: faker.lorem.sentence(),
    deskripsi: faker.lorem.paragraph(),
    user_nip: override.user_nip || faker.string.numeric({ length: 18 }),
    status: "pending",
    prioritas,
    deadline: faker.date.future(),
    ...override,
  };
}

module.exports = { tugasFactory };
