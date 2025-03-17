import { Gamification } from '@/database';
import { POINTS_RULES } from '@/constant';
import {
  UserPointsAction,
  UserPointsActionType,
  DatabaseQueryResponseType,
} from '@/interfaces';

const updateGamificationRecord = async (
  userId: string,
  actionType: UserPointsActionType
) => {
  try {
    let gamification = await Gamification.findOne({ userId });

    if (!gamification) {
      gamification = new Gamification({ userId, points: 0, actions: [] });
    }

    const pointsEarned = POINTS_RULES[actionType] || 0;
    const action: UserPointsAction = {
      actionType,
      pointsEarned,
    };

    gamification.actions.push(action);
    gamification.points += pointsEarned;
    await gamification.save();

    return { success: true, points: gamification.points };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error updating gamification record' };
  }
};

const getUserPointFromDB = async (
  userId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const gamification = await Gamification.findOne({ userId });

    if (!gamification) {
      return { error: 'User Data not found' };
    }

    return { data: gamification };
  } catch (error) {
    return { error: 'Error fetching user points' };
  }
};

export { updateGamificationRecord, getUserPointFromDB };
