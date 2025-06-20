const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("./cloudinary");
const multer = require("multer");
const path = require("path");

// Konfigurasi untuk single image upload (user profile)
const userImageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "aplikasi_kominfo/user_profiles",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
    format: "png", // Memastikan format output
    resource_type: "image", // Memastikan tipe resource
  },
});

// Konfigurasi untuk multiple image upload (pengumpulan tugas)
const pengumpulanTugasImageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "aplikasi_kominfo/pengumpulan_tugas/images",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 1000, height: 1000, crop: "limit" }],
    format: "png",
    resource_type: "image",
  },
});

// Konfigurasi disk storage untuk file laporan
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../uploads/laporan"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Middleware untuk single image upload (user profile)
const uploadUserImage = multer({
  storage: userImageStorage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB limit
  },
  fileFilter: (req, file, cb) => {
    // Validasi tipe file
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Hanya file gambar yang diperbolehkan!"), false);
    }
    cb(null, true);
  },
}).single("image");

// Middleware untuk multiple image upload (pengumpulan tugas)
const uploadPengumpulanTugasImages = multer({
  storage: pengumpulanTugasImageStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit per file
  },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Hanya file gambar yang diperbolehkan!"), false);
    }
    cb(null, true);
  },
}).array("images", 5); // Maksimal 5 gambar

// Middleware untuk multiple file upload (laporan)
const uploadLaporanFiles = multer({
  storage: diskStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit per file
    files: 5, // Maksimal 5 file
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];

    if (!allowedMimes.includes(file.mimetype)) {
      return cb(
        new Error(
          "Format file tidak didukung! Hanya file PDF, DOC, DOCX, XLS, dan XLSX yang diperbolehkan."
        ),
        false
      );
    }
    cb(null, true);
  },
}).array("files", 5); // Maksimal 5 file

// Konfigurasi untuk multiple file upload (pengumpulan tugas)
const pengumpulanTugasFileStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "aplikasi_kominfo/pengumpulan_tugas/files",
    resource_type: "raw",
    allowed_formats: ["pdf", "doc", "docx", "xls", "xlsx"],
  },
});

// Middleware untuk multiple file upload (pengumpulan tugas)
const uploadPengumpulanTugasFiles = multer({
  storage: pengumpulanTugasFileStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit per file
  },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    if (!allowedMimes.includes(file.mimetype)) {
      return cb(new Error("Format file tidak didukung!"), false);
    }
    cb(null, true);
  },
}).array("files", 5); // Maksimal 5 file

module.exports = {
  uploadUserImage,
  uploadPengumpulanTugasImages,
  uploadLaporanFiles,
  uploadPengumpulanTugasFiles,
};
