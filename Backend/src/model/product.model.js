const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },

  price: {

    amount: { type: Number, required: true },
    currency: { type: String, default: "INR", enum:["INR","USD"]}
  },
  images:[{
    type:String
  }],
  seller:{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},

  stock: { type: Number, required: true, default: 0 },

});
const productModel = mongoose.model("Product", productSchema);
module.exports = productModel;
