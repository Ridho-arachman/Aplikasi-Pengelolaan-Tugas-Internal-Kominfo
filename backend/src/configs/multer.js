const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { cloudinary } = require("./cloudinary");
const multer = require("multer");

// Konfigurasi untuk single image upload (user profile)
const userImageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "aplikasi_kominfo/user_profiles",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

// Konfigurasi untuk multiple image upload (pengumpulan tugas)
const pengumpulanTugasImageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "aplikasi_kominfo/pengumpulan_tugas/images",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 1000, height: 1000, crop: "limit" }],
  },
});

// Konfigurasi untuk multiple file upload (laporan)
const laporanFileStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "aplikasi_kominfo/laporan/files",
    resource_type: "raw",
    allowed_formats: ["pdf", "doc", "docx", "xls", "xlsx"],
  },
});

// Konfigurasi untuk multiple file upload (pengumpulan tugas)
const pengumpulanTugasFileStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "aplikasi_kominfo/pengumpulan_tugas/files",
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
const uploadPengumpulanTugasImages = multer({
  storage: pengumpulanTugasImageStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit per file
  },
}).array("images", 5); // Maksimal 5 gambar

// Middleware untuk multiple file upload (laporan)
const uploadLaporanFiles = multer({
  storage: laporanFileStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit per file
  },
}).array("files", 5); // Maksimal 5 file

// Middleware untuk multiple file upload (pengumpulan tugas)
const uploadPengumpulanTugasFiles = multer({
  storage: pengumpulanTugasFileStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit per file
  },
}).array("files", 5); // Maksimal 5 file

module.exports = {
  uploadUserImage,
  uploadPengumpulanTugasImages,
  uploadLaporanFiles,
  uploadPengumpulanTugasFiles,
};
