import {
  AddCourseChapterInDBRequestProps,
  DatabaseQueryResponseType,
  UpdateCourseChapterInDBRequestProps,
} from '@/interfaces';
import { CourseChapter } from '@/database';

const AddCourseChapterToCourseSectionInDB = async (
  chapterData: AddCourseChapterInDBRequestProps
): Promise<DatabaseQueryResponseType> => {
  try {
    const chapter = await CourseChapter.create(chapterData);
    return { data: chapter };
  } catch (error) {
    return { error: 'Failed while adding chapter to a course' };
  }
};

const UpdateCourseChapterInDB = async ({
  chapterId,
  updatedData,
}: UpdateCourseChapterInDBRequestProps): Promise<DatabaseQueryResponseType> => {
  try {
    console.log('update - ', chapterId, updatedData);

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

const DeleteCourseChapterByIdFromDB = async (
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
  AddCourseChapterToCourseSectionInDB,
  UpdateCourseChapterInDB,
  DeleteCourseChapterByIdFromDB,
};
