import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Update user's bio
router.put("/:id/bio", async (req, res) => {
  try {
    const { bio } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { bio },
      { new: true }
    );

    res.json({ bio: user.bio });
  } catch (err) {
    res.status(500).json({ error: "Failed to update bio" });
  }
});

export default router;
