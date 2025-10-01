import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { toggleLike, rateMovie, createList, updateList, deleteList } from "../controllers/userMovies.js";

const router = express.Router();

router.post("/like/:tmdbId", verifyToken, toggleLike);
router.post("/rate/:tmdbId", verifyToken, rateMovie);
router.post("/lists", verifyToken, createList);
router.put("/lists/:listId", verifyToken, updateList);
router.delete("/lists/:listId", verifyToken, deleteList);

export default router;
