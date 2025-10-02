import User from "../models/User.js";

// Get the current user's ranked list
export const getRankedList = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.rankedList || []);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a movie to the ranked list
export const addMovieToRankedList = async (req, res) => {
  try {
    const { tmdbId, title, posterPath, release_date } = req.body;

    if (!tmdbId || !title) {
      return res.status(400).json({ message: "tmdbId and title are required" });
    }

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if the movie is already in the list
    const exists = user.rankedList.find((m) => m.tmdbId === tmdbId);
    if (exists) return res.status(400).json({ message: "Movie already in ranked list" });

    user.rankedList.push({
      tmdbId,
      title,
      posterPath,
      release_date,
      rank: 0, // default rank
    });

    await user.save();
    res.status(201).json(user.rankedList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update the rank of a movie in the list
export const updateMovieRank = async (req, res) => {
  try {
    const { tmdbId } = req.params;
    const { rank } = req.body;

    if (rank === undefined) return res.status(400).json({ message: "Rank is required" });

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const movie = user.rankedList.find((m) => m.tmdbId.toString() === tmdbId);
    if (!movie) return res.status(404).json({ message: "Movie not found in ranked list" });

    movie.rank = rank;
    await user.save();

    res.json(user.rankedList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Remove a movie from the ranked list
export const removeMovieFromRankedList = async (req, res) => {
  try {
    const { tmdbId } = req.params;

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.rankedList = user.rankedList.filter((m) => m.tmdbId.toString() !== tmdbId);
    await user.save();

    res.json(user.rankedList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
