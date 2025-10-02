import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  getRankedList,
  addMovieToRankedList,
  updateMovieRank,
  removeMovieFromRankedList,
} from "../controllers/rankedList.js";

const router = express.Router();

// Get the current user's ranked list
router.get("/", verifyToken, getRankedList);

// Add a movie to the ranked list
router.post("/", verifyToken, addMovieToRankedList);

// Update the rank of a movie in the ranked list
router.put("/:tmdbId", verifyToken, updateMovieRank);

// Remove a movie from the ranked list
router.delete("/:tmdbId", verifyToken, removeMovieFromRankedList);

export default router;
