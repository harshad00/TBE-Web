import { Gamification } from '@/database';
import {
  UserPointsAction,
  DatabaseQueryResponseType,
  UserPointsActionType,
} from '@/interfaces';
import { getPointsForAction } from '@/utils';

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

const reducePoints = async (
  userId: string,
  actionType: UserPointsActionType
) => {
  try {
    const gamification = await Gamification.findOne({ userId });

    if (!gamification || gamification.points <= 0) {
      return { success: false, message: 'Insufficient points' };
    }

    const { pointsEarned } = getPointsForAction(actionType);

    if (gamification.points < pointsEarned) {
      return {
        success: false,
        message: 'Not enough points to perform this action',
      };
    }

    gamification.points -= pointsEarned;
    await gamification.save();

    return { success: true, points: gamification.points };
  } catch (error) {
    console.error('Error reducing points:', error);
    return { success: false, message: 'Error reducing points', error };
  }
};

export { updateGamificationRecord, getUserPointFromDB, reducePoints };
