import express from "express";
import {
  createProduct,
  getProducts,
} from "../controllers/product.controller.js";
import Product from "../models/product.model.js";

const router = express.Router();

//GET ALL Products
router.get("/", getProducts);
//CREATE
router.post("/", createProduct);

export default router;