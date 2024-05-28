import {
  AddCourseDBRequestProps,
  DatabaseQueryResponseType,
  UpdateCourseRequestPayloadProps,
} from '@/interfaces';
import { Course, CourseChapter, CourseSection } from '@/database';
import mongoose from 'mongoose';

const addACourseToDB = async (
  courseDetails: AddCourseDBRequestProps
): Promise<DatabaseQueryResponseType> => {
  try {
    const course = new Course(courseDetails);
    await course.save();
    return { data: course };
  } catch (error) {
    return { error: 'failed while adding course' };
  }
};

const updateACourseInDB = async ({
  courseId,
  updatedData,
}: UpdateCourseRequestPayloadProps): Promise<DatabaseQueryResponseType> => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      updatedData,
      { new: true }
    );

    if (!updatedCourse) return { error: 'course does not exists' };

    return { data: updatedCourse };
  } catch (error) {
    return { error: 'failed while updating course' };
  }
};

const deleteACourseFromDBById = async (
  courseId: string
): Promise<DatabaseQueryResponseType> => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const sections = await CourseSection.find({ courseId });
    const sectionIds = sections.map((section) => section._id);
    await CourseChapter.deleteMany({ sectionId: { $in: sectionIds } });
    await CourseSection.deleteMany({ _id: { $in: sectionIds } });
    await Course.findByIdAndDelete(courseId);
    await session.commitTransaction();
    return { data: 'course deleted' };
  } catch (error) {
    await session.abortTransaction();
    return { error: 'failed while deleting course' };
  }
};

const getAllCoursesFromDB = async (): Promise<DatabaseQueryResponseType> => {
  try {
    const courses = await Course.find({});
    return { data: courses };
  } catch (error) {
    return { error: 'failed while fetching all courses' };
  }
};

// will implement letter, have to write aggregation
// const getACourseFromDBById = async (
//   courseId: string
// ): Promise<DatabaseQueryResponseType> => {
//   try {

//   } catch (error) {}
// };

export {
  addACourseToDB,
  updateACourseInDB,
  deleteACourseFromDBById,
  getAllCoursesFromDB,
};
