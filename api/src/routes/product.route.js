import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import Product from "../models/product.model.js";

const router = express.Router();

//GET ALL Products
router.get("/", getAllProducts);
//CREATE
router.post("/", createProduct);
// GET ProductById
router.get("/:id", getProductById)
//Update Products
router.patch("/:id", updateProduct);
//Delete Products
router.delete("/:id", deleteProduct);

export default router;