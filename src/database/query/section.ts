import {
  AddSectionToACourseDBRequestProps,
  DatabaseQueryResponseType,
  UpdateCourseSectionInDBRequestProps,
} from '@/interfaces';
import { CourseChapter, CourseSection } from '@/database';
import mongoose from 'mongoose';

const AddSectionToACourseInDB = async (
  sectionData: AddSectionToACourseDBRequestProps
): Promise<DatabaseQueryResponseType> => {
  try {
    const section = await CourseSection.create(sectionData);
    return { data: section };
  } catch (error) {
    return { error: 'failed while adding course' };
  }
};

const UpdateCourseSectionInDB = async ({
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

const DeleteCourseSectionByIdFromDB = async (
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

const GetChapterAssociatedWithSectionByIdFromDB = async (
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

export {
  AddSectionToACourseInDB,
  UpdateCourseSectionInDB,
  DeleteCourseSectionByIdFromDB,
  GetChapterAssociatedWithSectionByIdFromDB,
};
