import { databaseModels } from '@/constant';
import { JobModel } from '@/interfaces';
import { Model, Schema, model, models } from 'mongoose';

const JobSchema: Schema<JobModel> = new Schema(
  {
    company: {
      name: { type: String, required: true },
      email: { type: String },
      location: { type: String },
      linkedIn: { type: String },
      website: { type: String },
      description: { type: String, required: true },
      logo: { type: String, required: true },
    },
    skills: [{ type: String, required: true }],
    role: { type: String, required: true },
    location: { type: String, required: true },
    experience: {
      min: { type: Number },
      max: { type: Number },
    },
    jobUrl: { type: String, required: true },
    salary: {
      min: { type: Number },
      max: { type: Number },
    },
    isInternship: { type: Boolean, default: false },
    stipend: { type: Number },
    platform: { type: String, required: true },
  },
  { timestamps: true }
);

const Job: Model<JobModel> =
  models?.Job || model<JobModel>(databaseModels.JOB, JobSchema);
export default Job;
