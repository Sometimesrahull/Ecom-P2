const express = require("express");
const productController = require("../controller/products.controller"); 
const authMiddleware = require("../middleware/auth.middleware");
const multer =require("multer");

const upload=multer({storage:multer.memoryStorage()});


const router = express.Router();

router.post("/",
    authMiddleware.authSeller,
upload.array("images",4),
    productController.createProduct
);









module.exports = router;