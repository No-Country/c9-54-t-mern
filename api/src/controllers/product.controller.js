import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
        throw new error("Products Not Found !!");
    }
  };