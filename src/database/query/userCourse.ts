import {
  DatabaseQueryResponseType,
  EnrollCourseInDBRequestProps,
  MarkChapterAsCompletedDBRequestProps,
} from '@/interfaces';
import { UserCourse, CourseChapter, CourseSection } from '@/database';
import mongoose from 'mongoose';

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

export { enrollInACourse, markChapterAsCompleted, getEnrolledCourse };
