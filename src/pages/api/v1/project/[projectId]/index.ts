// pages/api/projects/[projectId].ts

import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { getProjectByIDFromDB } from '@/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);

  switch (req.method) {
    case 'GET':
      return handleGetProject(req, res);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${req.method} Not Allowed`,
        })
      );
  }
};

const handleGetProject = async (req: NextApiRequest, res: NextApiResponse) => {
  const { projectId } = req.query;

  if (!projectId) {
    return res.status(apiStatusCodes.BAD_REQUEST).json(
      sendAPIResponse({
        status: false,
        message: 'Project ID is required',
      })
    );
  }

  const { data, error } = await getProjectByIDFromDB(projectId as string);

  if (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Error fetching project',
        error: error.message,
      })
    );
  }

  if (!data) {
    return res.status(apiStatusCodes.NOT_FOUND).json(
      sendAPIResponse({
        status: false,
        message: 'Project not found',
      })
    );
  }

  return res.status(apiStatusCodes.OKAY).json(
    sendAPIResponse({
      status: true,
      message: 'Project fetched successfully',
      data,
    })
  );
};

export default handler;
