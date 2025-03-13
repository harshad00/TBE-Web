import { Schema, model, models, Model } from 'mongoose';
import { UserPointsAction, GamificationModel } from '@/interfaces';
import { DATABASE_MODELS, USER_POINTS_ACTION } from '@/constant';

// Define the Action schema
const ActionSchema = new Schema<UserPointsAction>(
  {
    actionType: {
      type: String,
      enum: USER_POINTS_ACTION,
      required: true,
    },
    pointsEarned: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { _id: false } // Disable the creation of _id for embedded documents
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
    actions: [ActionSchema], // Use the ActionSchema for actions
  },
  { timestamps: true }
);

// Create or retrieve the model
const Gamification: Model<GamificationModel> =
  models.Gamification ||
  model<GamificationModel>(DATABASE_MODELS.USERPOINTS, GamificationSchema);

export default Gamification;
