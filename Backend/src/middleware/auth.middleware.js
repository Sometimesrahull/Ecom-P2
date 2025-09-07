const userModel = require("../model/user.model");

const jwt = require("jsonwebtoken");

async function authSeller(req, res, next) {
const token = req.cookies.token;
if (!token) {
return res.status(401).json({ message: "Unauthorized: No token provided" });
};


try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    if(user.role !== "seller"){
        return res.status(403).json({message:"Forbidden: Access is denied"});
    }
    req.seller=user;
    next();
    
} catch (error) {
    console.log(error);
    res.status(403).json({message:"Internal Server Error"});
    
    
}




}
module.exports ={authSeller};