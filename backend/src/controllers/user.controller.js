const { Prisma } = require("../../generated/prisma");
const userServices = require("../services/user.service");
const { userCreateSchema } = require("../validation/user.validation");

const CreateUser = async (req, res) => {
  const body = userCreateSchema.safeParse(req.body);
  if (!body.success) {
    return res
      .status(400)
      .json({ status: "error", errors: body.error.flatten().fieldErrors });
  }

  try {
    const data = await userServices.createUser(body.data); // Pastikan Anda menggunakan async/await atau promise jika diperlukan
    res.status(201).json({
      status: "success",
      message: "User berhasil dibuat",
      data,
    });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      switch (err.code) {
        case "P2002":
          return res
            .status(400)
            .json({ status: "error", message: "NIP sudah terdaftar" });
        case "P2003":
          return res
            .status(400)
            .json({ status: "error", message: "Kode Jabatan tidak valid" });
        default:
          break;
      }
    }
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = {
  CreateUser,
};
