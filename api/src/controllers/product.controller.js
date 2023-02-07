import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ message: error.message });;
    }
  };

  export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };  