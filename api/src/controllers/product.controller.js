import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
        console.log("Products Not Found !!");
    }
  };

  export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (error) {
      console.log(error);
    }
  };  