import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs';
import authRoutes from './routes/auth.js';


dotenv.config();

const app = express();
// parse JSON bodies
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect("");

// all authentication routes from frontend will go to /routes/auth.js
app.use("/api", authRoutes); 

app.listen(3000, () => console.log('Server running on port 3000'));
