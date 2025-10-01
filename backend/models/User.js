import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    default: "/uploads/default-avatar.png",
  },
  bio: {
    type: String,
    maxlength: 200,
    default: "",
  },
  lastActive: {
    type: Date,
    default: Date.now,
  },


  likedMovies: [
    {
      tmdbId: { type: Number, required: true }, 
    },
  ],


  ratings: [
    {
      tmdbId: { type: Number, required: true },
      score: { type: Number, min: 1, max: 10, required: true },
    },
  ],

 
  lists: [
    {
      name: { type: String, required: true },
      movies: [
        {
          tmdbId: { type: Number, required: true },
          rank: { type: Number, default: 0 },
        },
      ],
    },
  ],
});

export default mongoose.model("User", UserSchema);
