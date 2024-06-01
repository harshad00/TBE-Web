import {
  AddCourseChapterInDBRequestProps,
  DatabaseQueryResponseType,
  UpdateCourseChapterInDBRequestProps,
} from '@/interfaces';
import { CourseChapter } from '@/database';

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

export {
  addCourseChapterToCourseSectionInDB,
  updateCourseChapterInDB,
  deleteCourseChapterByIdFromDB,
};
