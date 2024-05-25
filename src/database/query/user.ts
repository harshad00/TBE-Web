import {
  CreateUserRequestPayloadProps,
  DatabaseQueryResponseType,
} from '@/interfaces';
import User from '../models/User';

const getUserByIdFromDB = async (
  id: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const user = await User.findById(id);

    if (!user) return { error: 'user does not exists' };

    return { data: user };
  } catch (error) {
    return { error: 'error while fetching user' };
  }
};

const getUserByEmailFromDB = async (
  email: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const user = await User.findOne({ email });

    if (!user) return { error: 'user does not exists' };

    return { data: user };
  } catch (error) {
    return { error: 'error while fetching user' };
  }
};

const createUserInDB = async ({
  name,
  email,
}: CreateUserRequestPayloadProps): Promise<DatabaseQueryResponseType> => {
  try {
    const user = await User.create({ email, name });
    return { data: user };
  } catch (error) {
    return { error: 'error while creating user' };
  }
};

export { getUserByIdFromDB, getUserByEmailFromDB, createUserInDB };
