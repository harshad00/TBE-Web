import {
  DATABASE_MODELS,
  COUNTRY_CODES,
  USER_ROLE,
  PLATFORM_USAGE,
} from '@/constant';
import { UserModel } from '@/interfaces';
import { Model, Schema, model, models } from 'mongoose';
import { OnboardingModel, ContactInfo } from '@/interfaces';

const ContactSchema = new Schema<ContactInfo>(
  {
    countryCode: { type: String, enum: COUNTRY_CODES },
    number: { type: String },
  },
  { _id: false }
);

const OnboardingSchema: Schema<OnboardingModel> = new Schema(
  {
    role: {
      type: String,
      enum: USER_ROLE,
      required: [true, 'Role is required'],
    },
    usage: {
      type: [String],
      enum: PLATFORM_USAGE,
      required: [true, 'Usage is required'],
    },
    contactNo: ContactSchema,
  },
  {
    timestamps: true,
  }
);

const UserSchema: Schema<UserModel> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
    image: {
      type: String,
    },
    provider: {
      type: String,
      required: [true, 'Provider is required'],
    },
    providerAccountId: {
      type: String,
    },
    isOnboarded: OnboardingSchema,
  },
  { timestamps: true }
);

const User: Model<UserModel> =
  models?.User || model<UserModel>(DATABASE_MODELS.USER, UserSchema);
export default User;
