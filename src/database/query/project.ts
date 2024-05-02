import {
  AddChapterRequestPayloadProps,
  AddProjectRequestPayloadProps,
  AddSectionRequestPayloadProps,
  DatabaseQueryResponseType,
  DeleteSectionRequestPayloadProps,
  UpateSectionRequestPayloadProps,
  UpdateChapterDBRequestProps,
  UpdateProjectRequestPayloadProps,
} from '@/interfaces';
import { Project } from '@/database';

const addAProjectToDB = async ({
  name,
  slug,
  description,
  coverImageURL,
  requiredSkills,
  roadmap,
  difficultyLevel,
}: AddProjectRequestPayloadProps): Promise<DatabaseQueryResponseType> => {
  try {
    const project = new Project({
      name,
      slug,
      description,
      coverImageURL,
      requiredSkills,
      roadmap,
      difficultyLevel,
    });

    try {
      await project.save();
    } catch (error) {
      return { error };
    }

    return { data: project };
  } catch (error) {
    return { error };
  }
};

const getProjectsFromDB = async (): Promise<DatabaseQueryResponseType> => {
  try {
    const projects = await Project.find();
    return { data: projects };
  } catch (error) {
    return { error };
  }
};

const getProjectBySlugFromDB = async (
  slug: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const project = await Project.findOne({ slug });

    if (!project) {
      return { error: 'Project not found' };
    }

    return { data: project };
  } catch (error) {
    return { error };
  }
};

const getProjectByIDFromDB = async (
  projectId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const project = await Project.findOne({ _id: projectId });

    if (!project) {
      return { error: 'Project not found' };
    }

    return { data: project };
  } catch (error) {
    return { error };
  }
};

const updateProjectInDB = async ({
  projectId,
  updatedData,
}: UpdateProjectRequestPayloadProps): Promise<DatabaseQueryResponseType> => {
  try {
    const updatedProject = await Project.findOneAndUpdate(
      { _id: projectId },
      { $set: updatedData },
      { new: true }
    );

    if (!updatedProject) {
      return { error: 'Project not found' };
    }

    return { data: updatedProject };
  } catch (error) {
    return { error };
  }
};

const deleteProjectFromDB = async (
  projectId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const deletedProject = await Project.findOneAndDelete({ _id: projectId });
    if (!deletedProject) {
      return { error: 'Project not found' };
    }
    return { data: deletedProject };
  } catch (error) {
    return { error };
  }
};

const addSectionToProjectInDB = async (
  projectId: string,
  sectionData: AddSectionRequestPayloadProps
): Promise<DatabaseQueryResponseType> => {
  try {
    const project = await Project.findOne({ _id: projectId });

    if (!project) {
      return { error: 'Project not found' };
    }

    project.sections.push(sectionData);

    await project.save();

    return { data: project };
  } catch (error) {
    return { error: 'Section not added' };
  }
};

const getSectionsFromProjectInDB = async (
  projectId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const project = await Project.findOne({ _id: projectId });

    if (!project) {
      return { error: 'Project not found' };
    }

    return { data: project.sections };
  } catch (error) {
    return { error: 'Section not fetched' };
  }
};

const updateSectionInProjectInDB = async ({
  projectId,
  sectionId,
  updatedSectionName,
}: UpateSectionRequestPayloadProps): Promise<DatabaseQueryResponseType> => {
  try {
    const project = await Project.findOne({ _id: projectId });

    if (!project) {
      return { error: 'Project not found' };
    }

    const section = project.sections.find(
      (section) => section.sectionId === sectionId
    );

    if (!section) {
      return { error: 'Section not found' };
    }

    section.sectionName = updatedSectionName;

    await project.save();

    const updatedSectionIndex = project.sections.findIndex(
      (section) => section.sectionId === sectionId
    );

    return { data: project.sections[updatedSectionIndex] };
  } catch (error) {
    return { error: 'Error updating section' };
  }
};

const deleteSectionFromProjectInDB = async ({
  projectId,
  sectionId,
}: DeleteSectionRequestPayloadProps): Promise<DatabaseQueryResponseType> => {
  try {
    const project = await Project.findById(projectId);

    if (!project) {
      return { error: 'Project not found' };
    }

    const sectionIndex = project.sections.findIndex(
      (section) => section.sectionId === sectionId
    );

    if (sectionIndex === -1) {
      return { error: 'Section not found' };
    }

    project.sections.splice(sectionIndex, 1);

    await project.save();

    return {};
  } catch (error) {
    return { error: 'Error deleting section' };
  }
};

const addChapterToSectionInDB = async (
  projectId: string,
  sectionId: string,
  chapterData: AddChapterRequestPayloadProps
): Promise<DatabaseQueryResponseType> => {
  try {
    const project = await Project.findOne({ _id: projectId });

    if (!project) {
      return { error: 'Project not found' };
    }

    const section = project.sections.find(
      (section) => section.sectionId.toString() === sectionId
    );

    if (!section) {
      return { error: 'Section not found' };
    }

    section.chapters.push(chapterData);

    await project.save();

    return { data: project };
  } catch (error) {
    return { error: 'Chapter not added' };
  }
};

const getChaptersFromSectionInDB = async (
  projectId: string,
  sectionId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const project = await Project.findOne({ _id: projectId });

    if (!project) {
      return { error: 'Project not found' };
    }

    const section = project.sections.find(
      (section) => section.sectionId.toString() === sectionId
    );

    if (!section) {
      return { error: 'Section not found' };
    }

    return { data: section.chapters };
  } catch (error) {
    return { error: 'Error fetching chapters' };
  }
};

const getChapterFromSectionInDB = async (
  projectId: string,
  sectionId: string,
  chapterId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const project = await Project.findById(projectId);

    if (!project) {
      return { error: 'Project not found' };
    }

    const section = project.sections.find(
      (section) => section.sectionId.toString() === sectionId
    );

    if (!section) {
      return { error: 'Section not found' };
    }

    const chapter = section.chapters.find(
      (chapter) => chapter.chapterId.toString() === chapterId
    );

    if (!chapter) {
      return { error: 'Chapter not found' };
    }

    return { data: chapter };
  } catch (error) {
    return { error: 'Error fetching chapter' };
  }
};

const updateChapterInSectionInDB = async ({
  projectId,
  sectionId,
  chapterId,
  updatedChapterName,
  updatedChapterContent,
  updatedIsOptional,
}: UpdateChapterDBRequestProps): Promise<DatabaseQueryResponseType> => {
  try {
    const project = await Project.findOne({ _id: projectId });

    if (!project) {
      return { error: 'Project not found' };
    }

    const section = project.sections.find(
      (section) => section.sectionId.toString() === sectionId
    );

    if (!section) {
      return { error: 'Section not found' };
    }

    const chapter = section.chapters.find(
      (chapter) => chapter.chapterId.toString() === chapterId
    );

    if (!chapter) {
      return { error: 'Chapter not found' };
    }

    if (updatedChapterName) chapter.chapterName = updatedChapterName;
    if (updatedChapterContent) chapter.content = updatedChapterContent;
    if (updatedIsOptional !== undefined && updatedIsOptional !== null)
      chapter.isOptional = updatedIsOptional;

    await project.save();

    return { data: project };
  } catch (error) {
    return { error: 'Chapter not updated' };
  }
};

const deleteChapterFromSectionInDB = async ({
  projectId,
  sectionId,
  chapterId,
}: {
  projectId: string;
  sectionId: string;
  chapterId: string;
}): Promise<DatabaseQueryResponseType> => {
  try {
    // Find the project by projectId
    const project = await Project.findById(projectId);

    // If project not found, return error
    if (!project) {
      return { error: 'Project not found' };
    }

    // Find the section by sectionId
    const section = project.sections.find(
      (section) => section.sectionId.toString() === sectionId
    );

    // If section not found, return error
    if (!section) {
      return { error: 'Section not found' };
    }

    // Find the index of the chapter to delete
    const chapterIndex = section.chapters.findIndex(
      (chapter) => chapter.chapterId.toString() === chapterId
    );

    // If chapter not found, return error
    if (chapterIndex === -1) {
      return { error: 'Chapter not found' };
    }

    // Remove the chapter from the section
    section.chapters.splice(chapterIndex, 1);

    // Save the updated project
    await project.save();

    return { data: 'Chapter deleted successfully' };
  } catch (error) {
    return { error: 'Error deleting chapter' };
  }
};

export {
  addAProjectToDB,
  getProjectsFromDB,
  getProjectBySlugFromDB,
  updateProjectInDB,
  deleteProjectFromDB,
  getProjectByIDFromDB,
  addSectionToProjectInDB,
  getSectionsFromProjectInDB,
  updateSectionInProjectInDB,
  deleteSectionFromProjectInDB,
  addChapterToSectionInDB,
  getChaptersFromSectionInDB,
  updateChapterInSectionInDB,
  deleteChapterFromSectionInDB,
  getChapterFromSectionInDB,
};
