const productModel = require("../model/product.model");
const storageService = require("../services/storage.service");



async function createProduct(req,res){

    const files = req.files;

    console.log(files);
    
}







module.exports={createProduct};