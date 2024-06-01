import { databaseModels } from '@/constant';
import { CourseChapterModel } from '@/interfaces';
import { Model, Schema, model, models } from 'mongoose';

const CourseChapterSchema = new Schema<CourseChapterModel>({
  title: {
    type: String,
    required: [true, 'chapter title is required'],
  },
  content: {
    type: String,
    required: [true, 'video link is required'],
  },
  sectionId: {
    type: Schema.Types.ObjectId,
    required: [true, 'section id is required'],
    ref: `${databaseModels.COURSE_SECTION}`,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const CourseChapter: Model<CourseChapterModel> =
  models?.CourseChapter ||
  model<CourseChapterModel>(databaseModels.COURSE_CHAPTER, CourseChapterSchema);
export default CourseChapter;
