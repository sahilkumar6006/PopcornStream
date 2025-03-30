import mongoose from 'mongoose';

export const VideoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  tags: [{ type: String }],
  uploadedAt: { type: Date, default: Date.now },
  duration: { type: Number }, // in seconds
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  thumbnailUrl: { type: String },
  videoUrl: { type: String },
  sourceStreamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stream',
  },
  status: {
    type: String,
    enum: ['processing', 'ready', 'failed', 'private', 'public', 'unlisted'],
    default: 'processing',
  },
  qualities: [
    {
      resolution: { type: String }, // e.g., "720p", "1080p"
      url: { type: String },
      bitrate: { type: Number },
    },
  ],
});
