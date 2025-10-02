import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import userRoutes from "./routes/users.js";
import rankedListRoutes from './routes/rankedList.js'




dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

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

app.use("/api", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/rankedList", rankedListRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.listen(3000, () => console.log("Server running on port 3000"));
