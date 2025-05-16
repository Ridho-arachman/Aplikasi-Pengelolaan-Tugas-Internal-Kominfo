const {
  createPassword,
  comparePassword,
} = require("../../services/hash.service");

describe("Hash Service", () => {
  it("should return a hashed password", async () => {
    const password = "password";
    const hashedPassword = await createPassword(password);
    expect(hashedPassword).not.toBe(password);
  });
  it("should return true if password is correct", async () => {
    const password = "password";
    const hashedPassword = await createPassword(password);
    const isCorrect = await comparePassword(password, hashedPassword);
    expect(isCorrect).toBe(true);
  });
  it("should return false if password is incorrect", async () => {
    const password = "password";
    const hashedPassword = await createPassword(password);
    const isCorrect = await comparePassword("wrongpassword", hashedPassword);
    expect(isCorrect).toBe(false);
  });
});
