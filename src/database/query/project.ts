import {
  AddProjectRequestPayloadProps,
  AddSectionRequestPayloadProps,
  DatabaseQueryResponseType,
  ProjectDocumentModel,
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
    } catch (error: any) {
      return { error: error.message };
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

export const addSectionToProjectInDB = async (
  projectId: string,
  sectionData: AddSectionRequestPayloadProps
): Promise<DatabaseQueryResponseType> => {
  try {
    const { data: project, error } = await getProjectByIDFromDB(projectId);

    if (error) {
      return { error: 'Project not found' };
    }

    project.sections.push(sectionData);

    await project.save();

    return { data: project };
  } catch (error) {
    return { error: 'Section not added' };
  }
};

export {
  addAProjectToDB,
  getProjectsFromDB,
  getProjectBySlugFromDB,
  updateProjectInDB,
  deleteProjectFromDB,
  getProjectByIDFromDB,
};
