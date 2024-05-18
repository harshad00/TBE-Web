import { databaseModels } from '@/constant';

import { UserModel } from '@/interfaces';

import { Model, Schema, model, models } from 'mongoose';

import { v4 as uuidv4 } from 'uuid';

const UserSchema: Schema<UserModel> = new Schema({
  userId: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  username: {
    type: String,
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
  },
});

const User: Model<UserModel> =
  models?.User || model<UserModel>(databaseModels.USER, UserSchema);
export default User;
