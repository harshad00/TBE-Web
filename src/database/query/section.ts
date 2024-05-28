import {
  AddSectionToACourseDBRequestProps,
  DatabaseQueryResponseType,
} from '@/interfaces';
import { CourseSection } from '@/database';

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

export { AddSectionToACourseInDB };
