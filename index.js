const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("./productsOperations");
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1/Employees", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    
    console.log("Connection to MongoDB created");
    let product = await createProduct("Aqeel Ahmad",200000);
    let allProducts = await getAllProducts(); 
    console.log(allProducts);


    // let updatedProduct = updateProduct( "656c43e8bf48830267a024dc","Shoaib Zaran",0);
     // allProducts = await getAllProducts(); 
      // console.log(allProducts);
    
       
    //   await deleteProduct("656c43e8bf48830267a024dc");
     //   allProducts = await getAllProducts(); 
     //  console.log(allProducts);
    
    
  })
  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });
app.listen(3000);