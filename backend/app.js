const express = require("express");
const jabatanRoutes = require("./src/routes/jabatan.routes");

const app = express();

app.use(express.json());
// Routes
app.use("/api/jabatan", jabatanRoutes);

module.exports = app;
