import { Schema, model, models } from 'mongoose';

const GamificationSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, default: 0 },
    actions: [
      {
        actionType: {
          type: String,
          enum: [
            'enroll',
            'complete_chapter',
            'complete_course',
            'streak',
            'refer',
          ],
          required: true,
        },
        pointsEarned: { type: Number, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const Gamification =
  models?.Gamification || model('Gamification', GamificationSchema);
export default Gamification;
