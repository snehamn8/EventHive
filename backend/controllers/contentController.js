// backend/controllers/contentController.js
import Content from '../models/contentModel.js';

// POST /api/content/videos
export const createVideo = async (req, res) => {
  try {
    const { title, url, tags } = req.body;

    if (!title || !url) {
      return res.status(400).json({ message: 'Title and URL are required' });
    }

    // Check if user is attached from protect middleware
    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: 'Unauthorized: No user found' });
    }

    const video = await Content.create({
      title,
      url,
      tags,
      type: 'video',
      uploadedBy: req.user._id,
    });

    res.status(201).json(video);
  } catch (error) {
    console.error('Video Upload Error:', error.message);
    res.status(500).json({ message: 'Server error while uploading video' });
  }
};

// GET /api/content/videos
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Content.find({ type: 'video' }).sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    console.error('Fetch Videos Error:', error.message);
    res.status(500).json({ message: 'Error fetching videos' });
  }
};
