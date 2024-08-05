import { UserCourseChapterModel } from '@/interfaces';
import { Model, Schema, model, models } from 'mongoose';
import { databaseModels } from '@/constant';

const UserChapterSchema = new Schema<UserCourseChapterModel>(
  {
    userId: {
      type: String,
      required: [true, 'User id is required'],
      index: true,
    },
    courseId: {
      type: String,
      required: [true, 'Course id is required'],
      index: true,
    },
    chapterId: {
      type: String,
      required: [true, 'Course id is required'],
      index: true,
    },
    isCompleted: {
      type: Boolean,
    },
  },
  { timestamps: true, _id: true }
);

const UserChapter: Model<UserCourseChapterModel> =
  models?.UserChapter ||
  model<UserCourseChapterModel>(databaseModels.USER_CHAPTER, UserChapterSchema);

export default UserChapter;
