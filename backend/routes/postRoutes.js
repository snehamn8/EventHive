import express from "express";
import {
  createPost,
  getAllPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.post("/", createPost);     // POST /api/posts
router.get("/", getAllPosts);     // GET /api/posts

export default router;
