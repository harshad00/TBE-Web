import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import {
  AddProjectRequestPayloadProps,
  UpdateProjectRequestPayloadProps,
} from '@/interfaces';
import {
  addAProjectToDB,
  deleteProjectFromDB,
  getProjectsFromDB,
  updateProjectInDB,
} from '@/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);

  switch (req.method) {
    case 'POST':
      return handleAddProject(req, res);
    case 'GET':
      return handleGetProjects(req, res);
    case 'PUT':
      return handleUpdateProject(req, res);
    case 'DELETE':
      return handleDeleteProject(req, res);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${req.method} Not Allowed`,
        })
      );
  }
};

const handleAddProject = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    name,
    description,
    coverImageURL,
    requiredSkills,
    roadmap,
    difficultyLevel,
  } = req.body as AddProjectRequestPayloadProps;
  const { data, error } = await addAProjectToDB({
    name,
    description,
    coverImageURL,
    requiredSkills,
    roadmap,
    difficultyLevel,
  });

  if (error) {
    return res.status(apiStatusCodes.BAD_REQUEST).json(
      sendAPIResponse({
        status: false,
        message: 'Project not added',
        error,
      })
    );
  }

  return res.status(apiStatusCodes.RESOURCE_CREATED).json(
    sendAPIResponse({
      status: true,
      message: 'Project Added!',
      data,
    })
  );
};

const handleGetProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await getProjectsFromDB();

  if (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Error fetching projects',
        error: error.message,
      })
    );
  }

  return res.status(apiStatusCodes.OKAY).json(
    sendAPIResponse({
      status: true,
      message: 'Projects fetched successfully',
      data,
    })
  );
};

const handleUpdateProject = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id, name, meta } = req.body as UpdateProjectRequestPayloadProps;
  const { data, error } = await updateProjectInDB({ id, name, meta });

  if (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Error updating project',
        error: error.message,
      })
    );
  }

  return res.status(apiStatusCodes.OKAY).json(
    sendAPIResponse({
      status: true,
      message: 'Project updated successfully',
      data,
    })
  );
};

const handleDeleteProject = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { projectId } = req.query;
  const { data, error } = await deleteProjectFromDB(projectId as string);

  if (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Error deleting project',
        error: error.message,
      })
    );
  }

  return res.status(apiStatusCodes.OKAY).json(
    sendAPIResponse({
      status: true,
      message: 'Project deleted successfully',
      data,
    })
  );
};

export default handler;
