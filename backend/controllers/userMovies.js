import User from "../models/User.js";

// 👍 Like or unlike a movie
export const toggleLike = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // use id from token
    if (!user) return res.status(404).json({ error: "User not found" });

    const tmdbId = parseInt(req.params.tmdbId);
    const alreadyLiked = user.likedMovies.some(m => m.tmdbId === tmdbId);

    if (alreadyLiked) {
      user.likedMovies = user.likedMovies.filter(m => m.tmdbId !== tmdbId);
    } else {
      user.likedMovies.push({ tmdbId });
    }

    await user.save();
    res.json({ likedMovies: user.likedMovies });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ⭐ Rate a movie
export const rateMovie = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const tmdbId = parseInt(req.params.tmdbId);
    const { score } = req.body;

    if (score < 1 || score > 10) {
      return res.status(400).json({ error: "Score must be between 1 and 10" });
    }

    const existing = user.ratings.find(r => r.tmdbId === tmdbId);

    if (existing) {
      existing.score = score; // update
    } else {
      user.ratings.push({ tmdbId, score });
    }

    await user.save();
    res.json({ ratings: user.ratings });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📋 Create a new list
export const createList = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const { name, movies } = req.body; 
    // movies = [{ tmdbId: 123, rank: 1 }, ...]

    const newList = { name, movies };
    user.lists.push(newList);

    await user.save();
    res.json({ lists: user.lists });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Update an existing list
export const updateList = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const { listId } = req.params;
    const { name, movies } = req.body;

    const list = user.lists.id(listId);
    if (!list) return res.status(404).json({ error: "List not found" });

    if (name) list.name = name;
    if (movies) list.movies = movies;

    await user.save();
    res.json({ lists: user.lists });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🗑️ Delete a list
export const deleteList = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const { listId } = req.params;
    user.lists = user.lists.filter(l => l._id.toString() !== listId);

    await user.save();
    res.json({ lists: user.lists });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
