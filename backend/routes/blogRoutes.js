// backend/routes/blogRoutes.js
import express from 'express';
import {
  createBlog,
  getBlogs,
  getBlogById
} from '../controllers/blogController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// 🔒 Only logged-in users can create a blog
router.post('/', protect, createBlog);

// 🌐 Public Routes
router.get('/', getBlogs);       // All blogs
router.get('/:id', getBlogById); // Single blog by ID

export default router;
