import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs';
import Blog from './models/Blog.js'

dotenv.config();

const app = express();
app.use(express.json()); // parse JSON bodies

// Connect to MongoDB
const dbURI = process.env.MONGO_URI || "mongodb+srv://jformani:November1824@cluster0.ffkyzan.mongodb.net/node-tutsretryWrites=true&w=majority&appName=Cluster0";
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
