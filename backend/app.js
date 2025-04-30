const express = require("express");
const userRoutes = require("./src/routes/user.router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRoutes);

module.exports = app;
