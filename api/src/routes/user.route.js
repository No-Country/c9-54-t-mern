import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { validateDataUpdateUser } from "../validations/user.validations.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.patch("/:id", validateDataUpdateUser, updateUser);
router.delete("/:id", deleteUser);

export default router;
