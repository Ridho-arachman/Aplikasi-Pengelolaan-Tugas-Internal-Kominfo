const multer = require("multer");
const {
  uploadUserImage,
  uploadPengumpulanTugasImages,
  uploadLaporanFiles,
  uploadPengumpulanTugasFiles,
} = require("../configs/multer");

// Middleware untuk handle error upload
const handleUploadError = (err, req, res, next) => {
  console.error("Upload error:", err);

  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        status: "error",
        message: "Ukuran file terlalu besar",
      });
    }
    if (err.code === "LIMIT_FILE_COUNT") {
      return res.status(400).json({
        status: "error",
        message: "Jumlah file melebihi batas",
      });
    }
    return res.status(400).json({
      status: "error",
      message: "Error saat upload file",
    });
  }

  // Handle error dari Cloudinary
  if (
    err.http_code === 400 &&
    err.message.includes("file format not allowed")
  ) {
    return res.status(400).json({
      status: "error",
      message: "Format file tidak didukung oleh sistem",
    });
  }

  // Handle error dari fileFilter
  if (err.message && err.message.includes("Format file tidak didukung")) {
    return res.status(400).json({
      status: "error",
      message: err.message,
    });
  }

  // Handle error umum
  return res.status(500).json({
    status: "error",
    message: "Terjadi kesalahan saat mengupload file",
  });
};

// Middleware untuk upload image user (opsional)
const uploadUserImageMiddleware = (req, res, next) => {
  uploadUserImage(req, res, (err) => {
    if (err) {
      return handleUploadError(err, req, res, next);
    }
    next();
  });
};

// Middleware untuk upload multiple image pengumpulan tugas
const uploadPengumpulanTugasImagesMiddleware = (req, res, next) => {
  uploadPengumpulanTugasImages(req, res, (err) => {
    if (err) {
      return handleUploadError(err, req, res, next);
    }
    next();
  });
};

// Middleware untuk upload multiple file laporan
const uploadLaporanFilesMiddleware = (req, res, next) => {
  uploadLaporanFiles(req, res, (err) => {
    if (err) {
      return handleUploadError(err, req, res, next);
    }
    next();
  });
};

// Middleware untuk upload multiple file pengumpulan tugas
const uploadPengumpulanTugasFilesMiddleware = (req, res, next) => {
  uploadPengumpulanTugasFiles(req, res, (err) => {
    if (err) {
      return handleUploadError(err, req, res, next);
    }
    next();
  });
};

module.exports = {
  uploadUserImageMiddleware,
  uploadPengumpulanTugasImagesMiddleware,
  uploadLaporanFilesMiddleware,
  uploadPengumpulanTugasFilesMiddleware,
};
