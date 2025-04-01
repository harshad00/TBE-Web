import {
  CreateUserRequestPayloadProps,
  DatabaseQueryResponseType,
  PlatformUsageType,
  UserRoleType,
} from '@/interfaces';
import { User } from '@/database';

const getUserByIdFromDB = async (
  id: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const user = await User.findById(id);

    if (!user) return { error: 'User does not exists' };

    return { data: user };
  } catch (error) {
    return { error: 'Error while fetching user' };
  }
};

const getUserByEmailFromDB = async (
  email: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const user = await User.findOne({ email });

    if (!user) return { error: 'User does not exists' };

    return { data: user };
  } catch (error) {
    return { error: 'Failed while fetching user' };
  }
};

const createUserInDB = async (
  userPayload: CreateUserRequestPayloadProps
): Promise<DatabaseQueryResponseType> => {
  try {
    const user = await User.create(userPayload);
    return { data: user };
  } catch (error) {
    return { error: 'Failed while creating user' };
  }
};

const UserOnboardInDB = async (
  userId: string,
  userName: string,
  isOnboarded: boolean,
  profession: UserRoleType,
  purpose: PlatformUsageType[],
  contactNo: string
): Promise<DatabaseQueryResponseType> => {
  try {
    // Check if the username already exists for another user
    const existingUserName = await User.findOne({ userName });

    if (existingUserName && existingUserName._id.toString() !== userId) {
      return { error: 'Username already exists' };
    }

    // Update user by userId
    const user = await User.findByIdAndUpdate(
      userId,
      {
        isOnboarded,
        userName,
        profession,
        purpose,
        contactNo,
      },
      { new: true }
    );

    if (!user) return { error: 'User does not exist' };

    return { data: user };
  } catch (error) {
    return {
      error:
        'Failed while updating onboard status, username, profession, purpose, or contact number',
    };
  }
};

export {
  getUserByIdFromDB,
  getUserByEmailFromDB,
  createUserInDB,
  UserOnboardInDB,
};
