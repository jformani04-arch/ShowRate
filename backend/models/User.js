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
  },
  lastActive: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", UserSchema);
