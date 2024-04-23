import {
  AddProjectRequestPayloadProps,
  AddSectionRequestPayloadProps,
  DatabaseQueryResponseType,
  UpateSectionRequestPayloadProps,
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
  slug,
  fieldsToUpdate,
}: UpdateProjectRequestPayloadProps): Promise<DatabaseQueryResponseType> => {
  try {
    const updatedProject = await Project.findOneAndUpdate(
      { slug },
      { $set: fieldsToUpdate },
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
  slug: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const deletedProject = await Project.findOneAndDelete({ slug });
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

    // Find index of the updated section
    const updatedSectionIndex = project.sections.findIndex(
      (section) => section.sectionId === sectionId
    );

    return { data: project.sections[updatedSectionIndex] };
  } catch (error) {
    return { error: 'Error updating section' };
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
};
