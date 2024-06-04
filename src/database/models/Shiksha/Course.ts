import { ROADMAPS, databaseModels } from '@/constant';
import { CourseModel } from '@/interfaces';
import { Model, Schema, model, models } from 'mongoose';

const CourseSchema = new Schema<CourseModel>({
  title: {
    type: String,
    required: [true, 'course title is required'],
  },
  thumbnailLink: {
    type: String,
    required: [true, 'course thumbnail is required'],
  },
  description: {
    type: String,
  },
  liveOn: {
    type: Date,
    required: [true, 'liveOn is required'],
  },
  roadmap: { type: String, enum: ROADMAPS, required: true },
  slug: {
    type: String,
    required: [true, 'slug is required'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Course: Model<CourseModel> =
  models?.Course || model<CourseModel>(databaseModels.Course, CourseSchema);
export default Course;
