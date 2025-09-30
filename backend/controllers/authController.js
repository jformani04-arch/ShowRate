import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser)
      return res
        .status(400)
        .json({ message: "Username or email already in use" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body;
    const user = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profilePhoto: user.profilePhoto || "/uploads/default-avatar.png",
        bio: user.bio || "",
        lastActive: user.lastActive || null,
        dateJoined: user.dateJoined || null,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const checkLogin = async (req, res) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.json({ loggedIn: false });
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select(
      "username email profilePhoto bio lastActive dateJoined"
    );
    if (!user) return res.json({ loggedIn: false });
    res.json({
      loggedIn: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profilePhoto: user.profilePhoto || "/uploads/default-avatar.png",
        bio: user.bio || "",
        lastActive: user.lastActive || null,
        dateJoined: user.dateJoined || null,
      },
    });
  } catch {
    res.json({ loggedIn: false });
  }
};

export const logoutUser = (req, res) => {
  res.json({ message: "Logged out successfully" });
};
