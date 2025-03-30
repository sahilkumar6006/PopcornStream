import mongoose from 'mongoose';

const SubscriptionSchema = new mongoose.Schema({
  subscriber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tier: { type: Number, default: 1 },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  isActive: { type: Boolean, default: true },
  autoRenew: { type: Boolean, default: true },
  paymentHistory: [
    {
      amount: { type: Number },
      date: { type: Date },
      transactionId: { type: String },
    },
  ],
});

export const SubscriptionModel = mongoose.model('Subscription', SubscriptionSchema);
