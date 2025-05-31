const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

// Konfigurasi Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Konfigurasi storage untuk gambar
const imageStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "images",
    allowed_formats: ["jpg", "jpeg", "png"],
    transformation: [{ width: 1000, height: 1000, crop: "limit" }],
  },
});

// Konfigurasi storage untuk PDF
const pdfStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "documents",
    resource_type: "raw",
    allowed_formats: ["pdf"],
  },
});

// Middleware untuk upload gambar
const uploadImage = multer({ storage: imageStorage });

// Middleware untuk upload PDF
const uploadPDF = multer({ storage: pdfStorage });

module.exports = {
  cloudinary,
  uploadImage,
  uploadPDF,
};
