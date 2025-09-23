import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Handle user signup
export const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check if user exists by username OR email
    const existingUser = await User.findOne({
      $or: [{ username }, { email }]
    });

    if (existingUser) {
      return res.status(400).json({ message: "Username or email already in use" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Handle user login
export const loginUser = async (req, res) => {
  try {
    const { identifier, password } = req.body; // identifier = username OR email

    // find user by username OR email
    const user = await User.findOne({
      $or: [{ username: identifier }, { email: identifier }]
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, username: user.username, email: user.email });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const checkLogin = async (req, res) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.json({ loggedIn: false });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // fetch user from DB
    const user = await User.findById(decoded.id).select("username email");
    if (!user) return res.json({ loggedIn: false });

    return res.json({
      loggedIn: true,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch {
    return res.json({ loggedIn: false });
  }
};

export const logoutUser = (req, res) => {
  // if token stored in cookie, you could clear it here:
  // res.clearCookie("token");

  // For frontend-managed token (localStorage), just respond success
  res.json({ message: "Logged out successfully" });
};

