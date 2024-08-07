import { UserCourseChapterModel } from '@/interfaces';
import { Model, Schema, model, models } from 'mongoose';
import { databaseModels } from '@/constant';

const UserChapterSchema = new Schema<UserCourseChapterModel>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: databaseModels.USER,
      required: [true, 'User id is required'],
      index: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: databaseModels.COURSE,
      required: [true, 'Course id is required'],
      index: true,
    },
    chapterId: {
      type: Schema.Types.ObjectId,
      ref: databaseModels.USER_CHAPTER,
      required: [true, 'Chapter id is required'],
      index: true,
    },
    isCompleted: {
      type: Boolean,
    },
  },
  { timestamps: true, _id: true }
);

// Virtual properties to link with UserCourse and Course
UserChapterSchema.virtual('chapter', {
  ref: 'Chapter', // Refers to the Chapter model
  localField: 'chapterId',
  foreignField: '_id',
});

UserChapterSchema.virtual('course', {
  ref: databaseModels.COURSE,
  localField: 'courseId',
  foreignField: '_id',
});

const UserChapter: Model<UserCourseChapterModel> =
  models?.UserChapter ||
  model<UserCourseChapterModel>(databaseModels.USER_CHAPTER, UserChapterSchema);

export default UserChapter;
