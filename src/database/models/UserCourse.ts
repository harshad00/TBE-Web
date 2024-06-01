import { UserCourseModel } from '@/interfaces';
import mongoose, { Model, Schema, model, models } from 'mongoose';
import { databaseModels } from '@/constant';
const UserCourseSchema = new Schema<UserCourseModel>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `${databaseModels.USER}`,
    required: [true, 'user id is required'],
  },

  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: `${databaseModels.COURSE_CHAPTER}`,
    required: [true, 'chapter id is required'],
  },

  chaptersId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: `${databaseModels.COURSE_CHAPTER}`,
    },
  ],
});

const UserCourse: Model<UserCourseModel> =
  models?.UserCourse ||
  model<UserCourseModel>(databaseModels.USER_COURSE, UserCourseSchema);

export default UserCourse;
