import { DATABASE_MODELS } from '@/constant';
import { JobAggregateModel } from '@/interfaces';
import { Model, Schema, model, models } from 'mongoose';

const JobAggregateSchema = new Schema<JobAggregateModel>(
  {
    trendingSkills: [
      {
        name: String,
        count: Number,
      },
    ],
    topLocations: [
      {
        name: String,
        count: Number,
      },
    ],
    jobDomains: [
      {
        name: String,
        count: Number,
      },
    ],
    companyTypes: [
      {
        name: String,
        count: Number,
      },
    ],
  },
  { timestamps: true }
);

const JobAggregate: Model<JobAggregateModel> =
  models.JobAggregate ||
  model(DATABASE_MODELS.JOB_AGGREGATE, JobAggregateSchema);

export default JobAggregate;
