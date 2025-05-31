const express = require("express");
const router = express.Router();
const {
  verifyToken,
  authorizeRoles,
} = require("../middleware/auth.middleware");
const { uploadImage, uploadPDF } = require("../configs/cloudinary");

// Route untuk upload gambar
router.post(
  "/image",
  verifyToken,
  uploadImage.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          status: "error",
          message: "Tidak ada file yang diupload",
        });
      }

      res.json({
        status: "success",
        message: "File berhasil diupload",
        data: {
          url: req.file.path,
          filename: req.file.filename,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Gagal mengupload file",
      });
    }
  }
);

// Route untuk upload PDF
router.post("/pdf", verifyToken, uploadPDF.single("pdf"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        status: "error",
        message: "Tidak ada file yang diupload",
      });
    }

    res.json({
      status: "success",
      message: "PDF berhasil diupload",
      data: {
        url: req.file.path,
        filename: req.file.filename,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Gagal mengupload PDF",
    });
  }
});

module.exports = router;
