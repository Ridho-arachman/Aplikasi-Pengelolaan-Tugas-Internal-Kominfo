const {
  getJabatanSchema,
  createJabatanSchema,
  updateJabatanSchema,
  getAllJabatanSchema,
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

const getAllJabatanMiddleware = (req, res, next) => {
  const data = getAllJabatanSchema.safeParse(req.query);
  if (!data.success) {
    return res.status(400).json({
      status: "error",
      errors: data.error.errors.map((error) => ({
        field: error.path[0],
        message: error.message,
      })),
    });
  }
  next();
};
const getJabatanMiddleware = (req, res, next) => {
  const data = getAllJabatanSchema.safeParse(req.params);
  if (!data.success) {
    return res.status(400).json({
      status: "error",
      errors: data.error.errors.map((error) => ({
        field: error.path[0],
        message: error.message,
      })),
    });
  }
  next();
};

const updateJabatanMiddleware = (req, res, next) => {
  const { nama_jabatan } = req.body;
  const { kd_jabatan } = req.params;
  const data = { kd_jabatan, nama_jabatan };
  const result = updateJabatanSchema.safeParse(data);

  if (!result.success) {
    return res.status(400).json({
      status: "error",
      errors: result.error.errors.map((error) => ({
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
  getJabatanMiddleware,
  updateJabatanMiddleware,
  createJabatanMiddleware,
  deleteJabatanMiddleware,
  getAllJabatanMiddleware,
};
