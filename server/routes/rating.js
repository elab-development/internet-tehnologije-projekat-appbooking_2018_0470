import express from "express";

const router = express.Router();

import { submitRating, getAverageRating } from "../controllers/rating.js";

router.post("/:hotelId/rate", submitRating);
router.get("/:hotelId/rating", getAverageRating);

export default router;
