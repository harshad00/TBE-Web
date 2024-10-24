import {
  CreateUserRequestPayloadProps,
  DatabaseQueryResponseType,
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

export { getUserByIdFromDB, getUserByEmailFromDB, createUserInDB };
