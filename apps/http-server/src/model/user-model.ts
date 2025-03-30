import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  displayName: { type: String },
  avatarUrl: { type: String },
  isStreamer: { type: Boolean, default: false },
  streamKey: {
    type: String,
    unique: true,
    sparse: true,
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  createdAt: { type: Date, default: Date.now },
  lastLogin: { type: Date },
});

UserSchema.methods.generateStreamKey = function () {
  this.streamKey = require('crypto').randomBytes(20).toString('hex');
  return this.streamKey;
};

export const UserModel = mongoose.model('User', UserSchema);
