import { databaseModels } from '@/constant';
import { CourseSectionModel } from '@/interfaces';
import { Model, Schema, model, models } from 'mongoose';

const CourseSectionSchema = new Schema<CourseSectionModel>({
  title: {
    type: String,
    required: [true, 'course section title is required'],
  },
  courseId: {
    type: Schema.Types.ObjectId,
    required: [true, 'course id is required'],
    ref: `${databaseModels.Course}`,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const CourseSection: Model<CourseSectionModel> =
  models?.CourseSection ||
  model<CourseSectionModel>(databaseModels.COURSE_SECTION, CourseSectionSchema);
export default CourseSection;
