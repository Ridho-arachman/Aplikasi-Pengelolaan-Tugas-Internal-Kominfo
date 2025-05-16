const express = require("express");
const jabatanRoutes = require("./src/routes/jabatan.routes");
const userRoutes = require("./src/routes/user.routes");

const app = express();

app.use(express.json());
// Routes
app.use("/api/jabatan", jabatanRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
