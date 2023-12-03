const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  
  name: String,
  salary: Number,
  slug: {
    type: String,
    lowercase: true,
  },
});
const ProductModel = mongoose.model("Salaries", productSchema);
module.exports = ProductModel;