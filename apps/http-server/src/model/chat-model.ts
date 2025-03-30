import mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  stream: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stream',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  type: {
    type: String,
    enum: ['message', 'donation', 'subscription', 'follow'],
    default: 'message',
  },
  metadata: { type: mongoose.Schema.Types.Mixed },
});

export const ChatModel = mongoose.model('Chat', ChatSchema);
