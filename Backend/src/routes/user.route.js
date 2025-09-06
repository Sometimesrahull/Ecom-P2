const express = require("express");
const authController = require("../controller/auth.controller");

const router = express.Router();
router.post("/user/register", authController.userRegister);
router.post("/user/login", authController.userLogin);
router.post("/seller/register", authController.sellerRregister);
router.post("/seller/login", authController.sellerLogin);

module.exports = router;
