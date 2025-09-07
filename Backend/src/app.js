const express = require("express");

const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", userRoutes);
app.use("/api/products", productRoutes);

module.exports = app;
