import { databaseModels } from '@/constant';
import { IUser } from '@/interfaces';
import { Model, Schema, model, models } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
const UserSchema: Schema<IUser> = new Schema(
  {
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
      required: [true, 'username is required'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
  },
  { _id: false }
);

const User: Model<IUser> =
  models?.User || model<IUser>(databaseModels.USER, UserSchema);
export default User;
