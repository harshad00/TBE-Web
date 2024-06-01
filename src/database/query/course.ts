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
    return { error: 'Failed while adding course' };
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

    if (!updatedCourse) return { error: 'Course does not exists' };

    return { data: updatedCourse };
  } catch (error) {
    return { error: 'Failed while updating course' };
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
    return { error: 'Failed while deleting course' };
  }
};

const getAllCoursesFromDB = async (): Promise<DatabaseQueryResponseType> => {
  try {
    const courses = await Course.find({});
    return { data: courses };
  } catch (error) {
    return { error: 'Failed while fetching all courses' };
  }
};

// will implement letter, have to write aggregation
const getACourseFromDBById = async (
  courseId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const courseObjectId = new mongoose.Types.ObjectId(courseId);
    const course = await Course.aggregate([
      {
        $match: {
          _id: courseObjectId,
        },
      },
      {
        $lookup: {
          from: 'coursesections', // collection name of CourseSection
          localField: '_id',
          foreignField: 'courseId',
          as: 'sections',
        },
      },
      {
        $unwind: {
          path: '$sections',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'coursechapters', // collection name of CourseChapter
          localField: 'sections._id',
          foreignField: 'sectionId',
          as: 'sections.chapters',
        },
      },
      {
        $group: {
          _id: '$_id',
          title: { $first: '$title' },
          thumbnailLink: { $first: '$thumbnailLink' },
          description: { $first: '$description' },
          roadmap: { $first: '$roadmap' },
          liveOn: { $first: '$liveOn' },
          createdAt: { $first: '$createdAt' },
          sections: { $push: '$sections' },
        },
      },
    ]);
    if (course[0].liveOn <= Date.now()) return { data: course };
    return { data: null };
  } catch (error) {
    return { error: 'Failed while fetching a course' };
  }
};

export {
  addACourseToDB,
  updateACourseInDB,
  deleteACourseFromDBById,
  getAllCoursesFromDB,
  getACourseFromDBById,
};
