const bcrypt = require("bcrypt");
const saltRounds = 10;

const createPassword = async (password) => {
  return bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = { createPassword, comparePassword };
