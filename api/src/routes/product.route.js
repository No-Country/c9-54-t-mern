import express from "express";
import {
  
  getProducts,
  
} from "../controllers/product.controller.js";
import Product from "../models/product.model.js";

const router = express.Router();

//GET ALL Products
router.get("/", getProducts);

export default router;