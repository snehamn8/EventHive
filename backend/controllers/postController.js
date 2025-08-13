import Post from "../models/postModel.js";

// Create post
const createPost = async (req, res) => {
  const { user, content, image } = req.body;

  const newPost = new Post({ user, content, image });
  await newPost.save();

  res.status(201).json(newPost);
};

// Get all posts
const getAllPosts = async (req, res) => {
  const posts = await Post.find().populate("user", "name");
  res.json(posts);
};

export { createPost, getAllPosts };
