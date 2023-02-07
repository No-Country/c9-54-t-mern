import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
    
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
/// Find Product By Id

  export const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
      const productById = await Product.findOne({_id: id});
      productById === null
        ? res.status(404).json({ message: "The product does not exist" })
        : res.status(200).json(productById);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  // Update Product
  export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const product = await Product.updateOne({ _id: id }, body);
      product.modifiedCount === 1
        ? res.status(200).json({ message: "Update Successful", product })
        : res.status(404).json({ message: "Not Update" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };


  // Delete Product

  export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.deleteOne({ _id: id });
      res.status(204).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

