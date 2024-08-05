import {
  AddChapterToCourseRequestProps,
  AddCourseRequestPayloadProps,
  DatabaseQueryResponseType,
  EnrollCourseInDBRequestProps,
  UpdateChapterInCourseRequestProps,
  UpdateCourseRequestPayloadProps,
} from '@/interfaces';
import { Course, UserCourse } from '@/database';

const addACourseToDB = async (
  courseDetails: AddCourseRequestPayloadProps
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
  try {
    const deletedCourse = await Course.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return { error: 'Course not found' };
    }
    return { data: 'Course deleted' };
  } catch (error) {
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

const getACourseFromDBById = async (
  courseId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const course = await Course.findById(courseId);

    if (!course) {
      return { error: 'Course not found' };
    }

    return { data: course };
  } catch (error) {
    return { error: `Failed while fetching a course ${error}` };
  }
};

const addChapterToCourseInDB = async (
  courseId: string,
  chapter: AddChapterToCourseRequestProps
) => {
  try {
    const updatedCourse = await Course.findOneAndUpdate(
      { _id: courseId },
      { $push: { chapters: chapter } },
      { new: true }
    );

    if (!updatedCourse) {
      return { error: 'Course not found' };
    }

    return { data: updatedCourse };
  } catch (error) {
    return { error: 'Failed to add chapter to course' };
  }
};

const updateCourseChapterInDB = async (
  courseId: string,
  chapterId: string,
  { name, content, isOptional }: UpdateChapterInCourseRequestProps
) => {
  try {
    const course = await Course.findOneAndUpdate(
      { _id: courseId, 'chapters._id': chapterId },
      {
        $set: {
          'chapters.$.chapterName': name,
          'chapters.$.content': content,
          'chapters.$.isOptional': isOptional,
        },
      },
      { new: true }
    );

    return { data: course };
  } catch (error) {
    return { error: 'Failed to update chapter to course' };
  }
};

const deleteCourseChapterByIdFromDB = async (
  courseId: string,
  chapterId: string
) => {
  try {
    const course = await Course.findOneAndUpdate(
      { _id: courseId },
      { $pull: { chapters: { _id: chapterId } } },
      { new: true }
    );
    return { data: course };
  } catch (error) {
    return { error: 'Failed to delete chapter from course' };
  }
};

const enrollInACourse = async ({
  userId,
  courseId,
}: EnrollCourseInDBRequestProps): Promise<DatabaseQueryResponseType> => {
  try {
    const userCourse = await UserCourse.create({ userId, courseId });
    return { data: userCourse };
  } catch (error) {
    return { error: 'Failed while enrolling in a course' };
  }
};

const getEnrolledCourseFromDB = async ({
  userId,
  courseId,
}: EnrollCourseInDBRequestProps): Promise<DatabaseQueryResponseType> => {
  try {
    const enrolledCourse = await UserCourse.findOne({ userId, courseId });
    return { data: enrolledCourse };
  } catch (error) {
    return { error: 'Failed while fetching enrolled course' };
  }
};

const getAllEnrolledCoursesFromDB = async (
  userId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const enrolledCourse = await UserCourse.find({ userId })
      .populate('courseId')
      .exec();
    return { data: enrolledCourse };
  } catch (error) {
    return { error: 'Failed while fetching enrolled course' };
  }
};

const getCourseBySlugFromDB = async (
  slug: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const course = await Course.findOne({ slug });

    if (!course) {
      return { error: 'Course not found' };
    }

    return { data: course };
  } catch (error) {
    return { error };
  }
};

export {
  addACourseToDB,
  updateACourseInDB,
  deleteACourseFromDBById,
  getAllCoursesFromDB,
  getACourseFromDBById,
  enrollInACourse,
  getEnrolledCourseFromDB,
  getAllEnrolledCoursesFromDB,
  getCourseBySlugFromDB,
  addChapterToCourseInDB,
  updateCourseChapterInDB,
  deleteCourseChapterByIdFromDB,
};
