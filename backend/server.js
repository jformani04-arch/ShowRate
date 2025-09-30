import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// parse JSON bodies
app.use(express.json());

// enable CORS **before** your routes
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// authentication routes
app.use("/api", authRoutes);

// ✅ Serve static files from /uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// start server
app.listen(3000, () => console.log("Server running on port 3000"));
