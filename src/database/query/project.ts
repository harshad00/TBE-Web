import {
  AddProjectRequestPayloadProps,
  DatabaseQueryResponseType,
  UpdateProjectRequestPayloadProps,
} from '@/interfaces';
import { Project } from '..';

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

const getProjectFromDB = async (
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
  projectId: string
): Promise<DatabaseQueryResponseType> => {
  try {
    const deletedProject = await Project.findByIdAndDelete(projectId);
    if (!deletedProject) {
      return { error: 'Project not found' };
    }
    return { data: deletedProject };
  } catch (error) {
    return { error };
  }
};

export {
  addAProjectToDB,
  getProjectsFromDB,
  getProjectFromDB,
  updateProjectInDB,
  deleteProjectFromDB,
};
