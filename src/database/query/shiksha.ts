import {
  AddCourseChapterInDBRequestProps,
  AddCourseRequestPayloadProps,
  AddSectionToACourseDBRequestProps,
  DatabaseQueryResponseType,
  EnrollCourseInDBRequestProps,
  MarkChapterAsCompletedDBRequestProps,
  UpdateCourseChapterInDBRequestProps,
  UpdateCourseRequestPayloadProps,
  UpdateCourseSectionInDBRequestProps,
} from '@/interfaces';
import { Course, CourseChapter, CourseSection, UserCourse } from '@/database';
import mongoose from 'mongoose';

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
          meta: { $first: '$meta' },
          coverImageURL: { $first: '$coverImageURL' },
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

const addSectionToACourseInDB = async (
  sectionData: AddSectionToACourseDBRequestProps
): Promise<DatabaseQueryResponseType> => {
  try {
    const section = await CourseSection.create(sectionData);
    return { data: section };
  } catch (error) {
    return { error: 'Failed while adding course' };
  }
};

const updateCourseSectionInDB = async ({
  updatedData,
  sectionId,
}: UpdateCourseSectionInDBRequestProps): Promise<DatabaseQueryResponseType> => {
  try {
    const section = await CourseSection.findByIdAndUpdate(
      sectionId,
      updatedData,
      { new: true }
    );
    return { data: section };
  } catch (error) {
    return { error: "Failed while updating course's section" };
  }
};

const deleteCourseSectionByIdFromDB = async (
  sectionId: string
): Promise<DatabaseQueryResponseType> => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    await CourseChapter.deleteMany({ sectionId });
    await CourseSection.findByIdAndDelete(sectionId);
    await session.commitTransaction();
    return { data: 'course deleted' };
  } catch (error) {
    await session.abortTransaction();
    return { error: "Failed while deleting course's section" };
  }
};

const getChapterAssociatedWithSectionByIdFromDB = async (
  sectionId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const sectionObjectId = new mongoose.Types.ObjectId(sectionId);
    const course = await CourseSection.aggregate([
      {
        $match: {
          _id: sectionObjectId,
        },
      },
      {
        $lookup: {
          from: 'coursechapters', // collection name of CourseChapter
          localField: '_id',
          foreignField: 'sectionId',
          as: 'chapters',
        },
      },
    ]);
    return { data: course };
  } catch (error) {
    return { error: 'Failed while fetching a section' };
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

const addCourseChapterToCourseSectionInDB = async (
  chapterData: AddCourseChapterInDBRequestProps
): Promise<DatabaseQueryResponseType> => {
  try {
    const chapter = await CourseChapter.create(chapterData);
    return { data: chapter };
  } catch (error) {
    return { error: 'Failed while adding chapter to a course' };
  }
};

const updateCourseChapterInDB = async ({
  chapterId,
  updatedData,
}: UpdateCourseChapterInDBRequestProps): Promise<DatabaseQueryResponseType> => {
  try {
    const updatedChapter = await CourseChapter.findByIdAndUpdate(
      chapterId,
      updatedData,
      { new: true }
    );
    return { data: updatedChapter };
  } catch (error) {
    return { error: 'Failed while updating chapter' };
  }
};

const deleteCourseChapterByIdFromDB = async (
  chapterId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    await CourseChapter.findByIdAndDelete(chapterId);
    return { data: null };
  } catch (error) {
    return { error: 'Failed while deleting chapter' };
  }
};

const markChapterAsCompleted = async ({
  courseId,
  userId,
  sectionId,
  chapterId,
}: MarkChapterAsCompletedDBRequestProps): Promise<DatabaseQueryResponseType> => {
  try {
    const userCourse = await UserCourse.findOne({ userId, courseId });
    if (!userCourse) return { error: "you aren't enrolled in this course" };
    const isChapterExists = await CourseChapter.findById(chapterId);
    if (!isChapterExists) return { error: 'chapter does not exists' };
    const isSectionExists = await CourseSection.findById(
      isChapterExists.sectionId
    );

    if (
      !isSectionExists ||
      isChapterExists.sectionId !==
        new mongoose.Schema.Types.ObjectId(sectionId)
    ) {
      return { error: 'chapter is not part of the given section' };
    }

    if (
      isSectionExists.courseId !== new mongoose.Schema.Types.ObjectId(courseId)
    ) {
      return { error: 'section is not part of the given course' };
    }

    if (
      userCourse.chaptersId.includes(
        new mongoose.Schema.Types.ObjectId(chapterId)
      )
    )
      return { error: 'chapter is already marked' };
    userCourse.chaptersId.push(new mongoose.Schema.Types.ObjectId(chapterId));
    await userCourse.save();
    return { data: userCourse };
  } catch (error) {
    return { error: "you aren't enrolled in this course" };
  }
};

const getEnrolledCourse = async ({
  courseId,
  userId,
}: EnrollCourseInDBRequestProps): Promise<DatabaseQueryResponseType> => {
  try {
    const enrolledCourse = await UserCourse.findOne({ courseId, userId });
    return { data: enrolledCourse };
  } catch (error) {
    return { error: 'Failed while fetching enrolled course' };
  }
};

const getCourseBySlugFromDB = async (
  slug: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const course = await UserCourse.findOne({ slug });

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
  addSectionToACourseInDB,
  updateCourseSectionInDB,
  deleteCourseSectionByIdFromDB,
  getChapterAssociatedWithSectionByIdFromDB,
  enrollInACourse,
  addCourseChapterToCourseSectionInDB,
  updateCourseChapterInDB,
  deleteCourseChapterByIdFromDB,
  markChapterAsCompleted,
  getEnrolledCourse,
  getCourseBySlugFromDB,
};
