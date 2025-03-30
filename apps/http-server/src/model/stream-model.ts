import mongoose from 'mongoose';

const StreamSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  tags: [{ type: String }],
  isLive: { type: Boolean, default: false },
  startedAt: { type: Date },
  endedAt: { type: Date },
  thumbnailUrl: { type: String },
  viewers: { type: Number, default: 0 },
  maxViewers: { type: Number, default: 0 },
  rtmpUrl: { type: String },
  playbackUrl: { type: String },
  settings: {
    isRecorded: { type: Boolean, default: true },
    allowChat: { type: Boolean, default: true },
    isPrivate: { type: Boolean, default: false },
    allowedViewers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
});

export const StreamModel = mongoose.model('Stream', StreamSchema);
