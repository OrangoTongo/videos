// routes/seriesRouter.js
import express from "express";
import { getSeriesList, getEpisodesByFolder } from "../controllers/seriesController.js";

const router = express.Router();

router.get("/", getSeriesList);          // lista de séries
router.get("/:fld_id/episodes", getEpisodesByFolder); // episódios de cada série

export default router;
