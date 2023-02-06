import express from "express";
import { getUsers, getUser } from "../controllers/user.controller.js";

const router = express.Router();

//GET ALL User
router.get("/", getUsers);
router.get("/:id", getUser);

export default router;
