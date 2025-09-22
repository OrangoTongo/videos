import express from "express";
import { getInicio } from "../controllers/indexController.js";

const router = express.Router();

router.get("/", getInicio);

export default router;
