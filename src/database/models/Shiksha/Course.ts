import { databaseModels, DIFFICULTY_LEVEL, ROADMAPS } from '@/constant';
import { CourseChapterModel, CourseModel } from '@/interfaces';
import { Model, Schema, model, models } from 'mongoose';

const chapterSchema = new Schema<CourseChapterModel>(
  {
    name: {
      type: String,
      required: [true, 'Chapter Name is required'],
    },
    content: {
      type: String,
      required: [true, 'Chapter content is required'],
    },
    isOptional: {
      type: Boolean,
    },
  },
  { timestamps: true, _id: true }
);

const CourseSchema = new Schema<CourseModel>(
  {
    name: {
      type: String,
      required: [true, 'Course name is required'],
    },
    meta: { type: String },
    slug: {
      type: String,
      required: [true, 'Slug is required'],
    },
    coverImageURL: {
      type: String,
      required: [true, 'Course thumbnail is required'],
    },
    description: {
      type: String,
    },
    liveOn: {
      type: Date,
      required: [true, 'Live on is required'],
    },
    chapters: [chapterSchema],
    roadmap: { type: String, enum: ROADMAPS, required: true },
    difficultyLevel: {
      type: String,
      enum: DIFFICULTY_LEVEL,
      required: true,
    },
  },
  { timestamps: true, _id: true }
);

const Course: Model<CourseModel> =
  models?.Course || model<CourseModel>(databaseModels.COURSE, CourseSchema);
export default Course;
