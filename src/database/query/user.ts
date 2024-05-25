import {
  CreateUserRequestPayloadProps,
  DatabaseQueryResponseType,
  GetUserByEmailDBRequestProps,
  GetUserByIdDBRequestProps,
} from '@/interfaces';
import User from '../models/User';

const getUserByIdFromDB = async ({
  id,
}: GetUserByIdDBRequestProps): Promise<DatabaseQueryResponseType> => {
  try {
    const user = await User.findById(id);
    return { data: user };
  } catch (error) {
    return { error };
  }
};

const getUserByEmailFromDB = async ({
  email,
}: GetUserByEmailDBRequestProps): Promise<DatabaseQueryResponseType> => {
  try {
    const user = await User.findOne({ email });
    return { data: user };
  } catch (error) {
    return { error };
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
    return { error };
  }
};

export { getUserByIdFromDB, getUserByEmailFromDB, createUserInDB };
