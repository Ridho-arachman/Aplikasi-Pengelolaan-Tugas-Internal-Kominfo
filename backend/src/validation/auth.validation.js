const { z } = require("zod");

const loginSchema = z.object({
  nip: z.string({ required_error: "NIP harus diisi" }),
  password: z.string({ required_error: "Password harus diisi" }),
});

const refreshTokenSchema = z.object({
  refreshToken: z.string({ required_error: "Refresh token harus diisi" }),
});

module.exports = {
  loginSchema,
  refreshTokenSchema,
};
