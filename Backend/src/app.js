const express = require("express");

const cookieParser = require("cookie-parser");
const cors= require("cors");

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:["process.env.frontend_url"],
   
    credentials:true
}));

app.use("/api/auth", userRoutes);
app.use("/api/products", productRoutes);

module.exports = app;
