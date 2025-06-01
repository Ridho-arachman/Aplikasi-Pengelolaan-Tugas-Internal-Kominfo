const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("./cloudinary");
const multer = require("multer");

// Konfigurasi untuk single image upload (user profile)
const userImageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "user_profiles",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

// Konfigurasi untuk multiple image upload (pengumpulan tugas)
const tugasImageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "tugas_images",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 1000, height: 1000, crop: "limit" }],
  },
});

// Konfigurasi untuk multiple file upload (laporan dan pengumpulan tugas)
const fileStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "documents",
    resource_type: "raw",
    allowed_formats: ["pdf", "doc", "docx", "xls", "xlsx"],
  },
});

// Middleware untuk single image upload (user profile)
const uploadUserImage = multer({
  storage: userImageStorage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2MB limit
  },
}).single("image");

// Middleware untuk multiple image upload (pengumpulan tugas)
const uploadTugasImages = multer({
  storage: tugasImageStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit per file
  },
}).array("images", 5); // Maksimal 5 gambar

// Middleware untuk multiple file upload (laporan)
const uploadLaporanFiles = multer({
  storage: fileStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit per file
  },
}).array("files", 5); // Maksimal 5 file

// Middleware untuk multiple file upload (pengumpulan tugas)
const uploadTugasFiles = multer({
  storage: fileStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit per file
  },
}).array("files", 5); // Maksimal 5 file

module.exports = {
  uploadUserImage,
  uploadTugasImages,
  uploadLaporanFiles,
  uploadTugasFiles,
};
