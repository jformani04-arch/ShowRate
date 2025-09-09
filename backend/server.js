import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs';
import Blog from './models/Blog.js'

dotenv.config();

const app = express();
app.use(express.json()); // parse JSON bodies

// Connect to MongoDB
const dbURI = process.env.MONGO_URI || `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}?authSource=admin`;
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// POST route to add a blog
app.post('/add-blog', async (req, res) => {
    try {
        const { title, snippet, body } = req.body;

        const blog = new Blog({ title, snippet, body });
        const savedBlog = await blog.save();

        res.status(201).json(savedBlog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
