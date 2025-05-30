const express = require("express");
const jabatanRoutes = require("./src/routes/jabatan.routes");
const userRoutes = require("./src/routes/user.routes");
const historyJabatanRoutes = require("./src/routes/historyJabatan.routes");
const tugasRoutes = require("./src/routes/tugas.routes");
const laporanRoutes = require("./src/routes/laporan.routes");
const pengumpulanTugasRoutes = require("./src/routes/pengumpulanTugas.routes");
const ratingRoutes = require("./src/routes/rating.routes");
const authRoutes = require("./src/routes/auth.routes"); // Import auth routes
const passport = require("./src/configs/passport.config"); // Import passport config
const { authenticateJWT } = require("./src/middlewares/auth.middleware");

const app = express();

app.use(express.json());
app.use(passport.initialize()); // Initialize passport

// Rute publik (tidak perlu autentikasi)
app.use("/api/auth", authRoutes);

// Middleware autentikasi untuk semua rute kecuali auth
app.use(authenticateJWT);

// Rute yang dilindungi (memerlukan autentikasi)
app.use("/api/jabatan", jabatanRoutes);
app.use("/api/user", userRoutes);
app.use("/api/history-jabatan", historyJabatanRoutes);
app.use("/api/tugas", tugasRoutes);
app.use("/api/laporan", laporanRoutes);
app.use("/api/pengumpulan-tugas", pengumpulanTugasRoutes);
app.use("/api/rating", ratingRoutes);

module.exports = app;
