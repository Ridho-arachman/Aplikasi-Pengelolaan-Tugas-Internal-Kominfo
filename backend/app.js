const express = require("express");
const userRoutes = require("./src/routes/user.routes");
const laporanRoutes = require("./src/routes/laporan.routes");

const app = express();

app.use(express.json());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/laporan", laporanRoutes);

module.exports = app;
