const { ZodError } = require("zod");

/**
 * Middleware untuk validasi request
 * @param {Object|ZodSchema} schema - Skema validasi atau objek berisi skema untuk body, query, params
 * @returns {Function} Express middleware
 */
const validate = (schema) => (req, res, next) => {
  try {
    // Jika schema adalah objek dengan properti body, query, atau params
    if (schema.body || schema.query || schema.params) {
      const errors = [];
      const validated = {};

      // Validasi body jika ada skema body
      if (schema.body && req.body) {
        const bodyResult = schema.body.safeParse(req.body);
        if (!bodyResult.success) {
          errors.push(...bodyResult.error.errors.map(error => ({
            source: 'body',
            field: error.path.join('.'),
            message: error.message
          })));
        } else {
          validated.body = bodyResult.data;
        }
      }

      // Validasi query jika ada skema query
      if (schema.query && req.query) {
        const queryResult = schema.query.safeParse(req.query);
        if (!queryResult.success) {
          errors.push(...queryResult.error.errors.map(error => ({
            source: 'query',
            field: error.path.join('.'),
            message: error.message
          })));
        } else {
          validated.query = queryResult.data;
        }
      }

      // Validasi params jika ada skema params
      if (schema.params && req.params) {
        const paramsResult = schema.params.safeParse(req.params);
        if (!paramsResult.success) {
          errors.push(...paramsResult.error.errors.map(error => ({
            source: 'params',
            field: error.path.join('.'),
            message: error.message
          })));
        } else {
          validated.params = paramsResult.data;
        }
      }

      // Jika ada error, kembalikan respons error
      if (errors.length > 0) {
        return res.status(400).json({
          status: "error",
          errors
        });
      }

      // Menyimpan data yang sudah divalidasi
      req.validated = validated;
    } else {
      // Jika schema adalah skema tunggal, validasi semua sumber data
      const result = schema.safeParse(req.body || req.query || req.params);

      if (!result.success) {
        return res.status(400).json({
          status: "error",
          errors: result.error.errors.map((error) => ({
            field: error.path.join("."),
            message: error.message,
          })),
        });
      }

      // Menyimpan data yang sudah divalidasi
      req.validated = result.data;
    }

    next();
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Terjadi kesalahan saat validasi data",
      error: error.message
    });
  }
};

module.exports = validate;
