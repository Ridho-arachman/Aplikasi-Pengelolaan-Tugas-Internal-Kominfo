const express = require("express");
const jabatanRoutes = require("./src/routes/jabatan.routes");
const userRoutes = require("./src/routes/user.routes");
const historyJabatanRoutes = require("./src/routes/historyJabatan.routes");
const tugasRoutes = require("./src/routes/tugas.routes");
const laporanRoutes = require("./src/routes/laporan.routes");
const pengumpulanTugasRoutes = require("./src/routes/pengumpulanTugas.routes");
const ratingRoutes = require("./src/routes/rating.routes");

const app = express();

app.use(express.json());
// Routes
app.use("/api/jabatan", jabatanRoutes);
app.use("/api/user", userRoutes);
app.use("/api/history-jabatan", historyJabatanRoutes);
app.use("/api/tugas", tugasRoutes);
app.use("/api/laporan", laporanRoutes);
app.use("/api/pengumpulan-tugas", pengumpulanTugasRoutes);
app.use("/api/rating", ratingRoutes);

module.exports = app;
