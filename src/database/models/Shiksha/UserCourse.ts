import { UserCourseModel } from '@/interfaces';
import { Model, Schema, model, models } from 'mongoose';
import { databaseModels } from '@/constant';

const UserCourseSchema = new Schema<UserCourseModel>(
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
  },
  { timestamps: true, _id: true }
);

const UserCourse: Model<UserCourseModel> =
  models?.UserCourse ||
  model<UserCourseModel>(databaseModels.USER_COURSE, UserCourseSchema);

export default UserCourse;
