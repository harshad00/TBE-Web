import { Gamification } from '@/database';
import { UserPointsAction, DatabaseQueryResponseType } from '@/interfaces';
import { getPointsForAction } from '@/utils';

const updateGamificationRecord = async (userId: string, actionType: string) => {
  try {
    let gamification = await Gamification.findOne({ userId });

    if (!gamification) {
      gamification = new Gamification({ userId, points: 0, actions: [] });
    }

    // Get points for the action
    const { pointsEarned } = getPointsForAction(actionType);

    // Create an action object
    const action: UserPointsAction = {
      actionType,
      pointsEarned,
    };

    gamification.actions.push(action);
    gamification.points += pointsEarned;
    await gamification.save();

    return { success: true, points: gamification.points };
  } catch (error) {
    console.error('Gamification Error:', error);
    return { success: false, message: 'Error updating user points', error };
  }
};

const getUserPointFromDB = async (
  userId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const gamification = await Gamification.findOne({ userId });

    if (!gamification) {
      return { error: 'User not found' };
    }

    return { data: gamification };
  } catch (error) {
    return { error: 'Error fetching user points' };
  }
};

export { updateGamificationRecord, getUserPointFromDB };
