const ProductModel = require("./models/ProductModel");

const createProduct = async (name,salary) => {
  console.log("Create Product");
  let product = new ProductModel();
  product.name = name;
  product.salary = salary;
  await product.save();
  return product;
};
const updateProduct = async (_id, name, salary) => {
  let product = await ProductModel.findById(_id);
  product.name = name;
  product.salary = salary;
  await product.save();
  return product;
};
const getAllProducts = async () => {
  let products = await ProductModel.find();
  return products;
};

const deleteProduct = async (_id) => {
  let product = await ProductModel.findByIdAndDelete(_id);
};
module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.deleteProduct = deleteProduct;
module.exports.updateProduct = updateProduct;