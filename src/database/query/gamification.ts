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

const deductUserPointsFromDB = async (
  userId: string,
  actionType: UserPointsActionType
) => {
  if (!userId || !actionType) {
    return { success: false, message: 'Missing required fields' };
  }

  try {
    const gamification = await Gamification.findOne({ userId });

    if (!gamification) return { success: false, message: 'User not found' };

    const pointsToDeduct = getPointsForAction(actionType).pointsEarned;

    // Ensure points do not go below zero
    gamification.points = Math.max(0, gamification.points - pointsToDeduct);

    await gamification.save();

    return { success: true, points: gamification.points };
  } catch (error) {
    console.error('Error reducing points:', error);
    return { success: false, message: 'Error reducing points', error };
  }
};

const handleGamificationPoints = async (
  isCompleted: boolean,
  userId: string,
  actionType: UserPointsActionType
) => {
  try {
    if (!isCompleted) {
      console.log('Deducting Points...');
      await deductUserPointsFromDB(userId, actionType);
    } else {
      console.log('Updating Gamification Record...');
      await updateGamificationRecord(userId, actionType);
    }
    console.log('Gamification update success');
  } catch (error) {
    console.error('Error in handleGamificationPoints:', error);
  }
};

export {
  updateGamificationRecord,
  getUserPointFromDB,
  handleGamificationPoints,
};
