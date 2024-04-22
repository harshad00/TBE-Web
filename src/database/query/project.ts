import {
  AddProjectRequestPayloadProps,
  DatabaseQueryResponseType,
  UpdateProjectRequestPayloadProps,
} from '@/interfaces';
import { Project } from '..';

export const addAProjectToDB = async ({
  name,
  description,
  coverImageURL,
  requiredSkills,
  roadmap,
  difficultyLevel,
}: AddProjectRequestPayloadProps): Promise<DatabaseQueryResponseType> => {
  try {
    const project = new Project({
      name,
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

export const getProjectsFromDB =
  async (): Promise<DatabaseQueryResponseType> => {
    try {
      const projects = await Project.find();
      return { data: projects };
    } catch (error) {
      return { error };
    }
  };

export const updateProjectInDB = async ({
  id,
  name,
  meta,
}: UpdateProjectRequestPayloadProps): Promise<DatabaseQueryResponseType> => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { name, meta },
      { new: true }
    );
    return { data: updatedProject };
  } catch (error) {
    return { error };
  }
};

export const deleteProjectFromDB = async (
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
