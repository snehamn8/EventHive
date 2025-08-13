// backend/models/contentModel.js
import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    tags: [{ type: String }],
    type: { type: String, enum: ['video', 'blog'], required: true },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Content = mongoose.model('Content', contentSchema);
export default Content;
