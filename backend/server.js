import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import authRoutes from './routes/auth.js';
import cors from 'cors';

dotenv.config();

const app = express();

// parse JSON bodies
app.use(express.json()); 

// enable CORS **before** your routes
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  credentials: true,
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// authentication routes
app.use("/api", authRoutes); 

// start server
app.listen(3000, () => console.log("Server running on port 3000"));
