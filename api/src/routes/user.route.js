import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

//GET ALL User
router.get("/", getUsers);
router.get("/:id", getUser);
router.patch("/:id", updateUser);

export default router;
