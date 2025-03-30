import mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  targetType: {
    type: String,
    enum: ['stream', 'video'],
    required: true,
  },
  targetId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'targetType',
    required: true,
  },
  parentComment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  },
});

export const ComentModel = mongoose.model('Coment', CommentSchema);
