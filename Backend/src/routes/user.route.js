const express = require("express");
const authController = require("../controller/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/me",authMiddleware.authUser,(req,res)=>{
    res.status(200).json({user:req.user});
});

router.post("/user/register", authController.userRegister);
router.post("/user/login", authController.userLogin);
router.post("/seller/register", authController.registerSeller);
router.post("/seller/login", authController.loginSeller);

module.exports = router;
