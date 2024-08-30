import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { AddProjectRequestPayloadProps } from '@/interfaces';
import {
  addAProjectToDB,
  getProjectBySlugFromDB,
  getProjectsFromDB,
} from '@/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  switch (req.method) {
    case 'POST':
      return handleAddProject(req, res);
    case 'GET':
      return handleGetProjects(req, res);
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
    slug,
    description,
    coverImageURL,
    requiredSkills,
    roadmap,
    difficultyLevel,
  } = req.body as AddProjectRequestPayloadProps;

  const { error: projectAlreadyExist } = await getProjectBySlugFromDB(slug);

  if (!projectAlreadyExist) {
    return res.status(apiStatusCodes.BAD_REQUEST).json(
      sendAPIResponse({
        status: false,
        message: 'Project already exists',
      })
    );
  }

  const { data, error } = await addAProjectToDB({
    name,
    slug,
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

export default handler;
