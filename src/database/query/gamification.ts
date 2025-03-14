import { Gamification } from '@/database';
import { POINTS_RULES } from '@/constant';
import { UserPointsAction, UserPointsActionType } from '@/interfaces';

const updateGamificationRecord = async (
  userId: string,
  actionType: UserPointsActionType
) => {
  try {
    let gamification = await Gamification.findOne({ userId });

    if (!gamification) {
      gamification = new Gamification({ userId, points: 0, actions: [] });
    }

    // Get points for the action
    const pointsEarned = POINTS_RULES[actionType] || 0;

    // Create action object
    const action: UserPointsAction = {
      actionType,
      pointsEarned,
      timestamp: new Date(),
    };

    // Add action to the list
    gamification.actions.push(action);

    // Update total points
    gamification.points += pointsEarned;

    // Save changes
    await gamification.save();

    return { success: true, points: gamification.points };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error updating gamification record' };
  }
};

export { updateGamificationRecord };
