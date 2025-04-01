import {
  DATABASE_MODELS,
  USER_ROLE,
  PLATFORM_USAGE,
  COUNTRY_CODES,
} from '@/constant';
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
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
    },
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

const Onboarding: Model<OnboardingModel> =
  models?.Onboarding ||
  model<OnboardingModel>(DATABASE_MODELS.ONBOARDING, OnboardingSchema);

export default Onboarding;
