import express from 'express';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js'; // ✅ include adminOnly

const router = express.Router();

// @route   POST /api/users/register
// @desc    Register new user
// @access  Public
router.post(
  '/register',
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const user = await User.create({
      name,
      email,
      password,
      role: email === 'admin@gmail.com' ? 'admin' : 'user', // TEMP
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role || 'user',
        token: generateToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error('Invalid user data');
    }
  })
);

// @route   POST /api/users/login
// @desc    Authenticate user & get token
// @access  Public
router.post(
  '/login',
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      user.lastLogin = new Date();
      await user.save();

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401);
      throw new Error('Invalid email or password');
    }
  })
);

// @route   GET /api/users/profile
// @desc    Get logged-in user profile
// @access  Private
router.get(
  '/profile',
  protect,
  asyncHandler(async (req, res) => {
    res.json(req.user);
  })
);

// ✅ @route   GET /api/users
// ✅ @desc    Get all users (admin only)
// ✅ @access  Private/Admin
router.get(
  '/',
  protect,
  isAdmin,
  asyncHandler(async (req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
  })
);

export default router;
