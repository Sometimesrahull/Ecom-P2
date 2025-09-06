const express = require("express");

const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user.route");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRoutes);

module.exports = app;
