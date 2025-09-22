import express from "express";
import { getFilmes } from "../controllers/filmesController.js";

const router = express.Router();

router.get("/", getFilmes);

export default router;
