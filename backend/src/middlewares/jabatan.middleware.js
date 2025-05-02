const {
  getJabatanSchema,
  createJabatanSchema,
  updateJabatanSchema,
} = require("../validation/jabatan.validation");

const createJabatanMiddleware = (req, res, next) => {
  const body = createJabatanSchema.safeParse(req.body);
  if (!body.success) {
    return res.status(400).json({
      status: "error",
      errors: body.error.errors.map((error) => ({
        field: error.path[0],
        message: error.message,
      })),
    });
  }
  next();
};

const updateAndGetJabatanMiddleware = (req, res, next) => {
  const { nama_jabatan } = req.body;
  const { kd_jabatan } = req.params;
  const data = { kd_jabatan, nama_jabatan };
  const result = getJabatanSchema.safeParse(data);

  if (!result.success) {
    return res.status(400).json({
      status: "error",
      errors: body.error.errors.map((error) => ({
        field: error.path[0],
        message: error.message,
      })),
    });
  }
  next();
};

const deleteJabatanMiddleware = (req, res, next) => {
  const { kd_jabatan } = req.params;
  const data = { kd_jabatan };
  const result = getJabatanSchema.safeParse(data);
  if (!result.success) {
    return res.status(400).json({
      status: "error",
      errors: body.error.errors.map((error) => ({
        field: error.path[0],
        message: error.message,
      })),
    });
  }
  next();
};

module.exports = {
  updateAndGetJabatanMiddleware,
  createJabatanMiddleware,
  deleteJabatanMiddleware,
};
