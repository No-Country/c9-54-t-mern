import express from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import { validateDataUpdateProduct} from "../validations/product.validations";
/* para Ruta Protegida
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js"
*/

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.patch("/:id",validateDataUpdateProduct, updateProduct);
router.delete("/:id", deleteProduct);

/* RUTAS PROTEGIDAS
crear producto solo admin
router.post("/", verifyAdmin, createProduct);

cambiar update producto solo admin
router.patch("/:id", verifyAdmin, updateProduct);

borrar delete producto solo admin
router.delete("/:id", verifyAdmin, deleteProduct);
*/
export default router;
