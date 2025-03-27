import { Schema, model, models, Model } from 'mongoose';
import { GamificationModel } from '@/interfaces';
import { DATABASE_MODELS, USER_POINTS_ACTION } from '@/constant';

// Define the Action schema
const ActionSchema = new Schema(
  {
    actionType: {
      type: String,
      enum: USER_POINTS_ACTION,
      required: true,
    },
    pointsEarned: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { _id: false }
);

// Create the Gamification schema
const GamificationSchema = new Schema<GamificationModel>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: DATABASE_MODELS.USER,
      required: true,
    },
    points: { type: Number, default: 0 },
    actions: [ActionSchema],
  },
  { timestamps: true }
);

const Gamification: Model<GamificationModel> =
  models[DATABASE_MODELS.USERPOINTS] ||
  model<GamificationModel>(DATABASE_MODELS.USERPOINTS, GamificationSchema);

export default Gamification;
