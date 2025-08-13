// backend/routes/contentRoutes.js
import express from 'express';
import { createVideo, getAllVideos } from '../controllers/contentController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST: Upload a video (Admin only)
router.post('/videos', protect, isAdmin, createVideo);

// GET: All uploaded videos
router.get('/videos', getAllVideos);

export default router;
