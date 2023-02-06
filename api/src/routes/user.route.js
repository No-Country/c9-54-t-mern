import express from "express";
import { getUser } from "../controllers/user.controller.js";

const router = express.Router();

//GET ALL User
router.get("/", getUser);

export default router;
