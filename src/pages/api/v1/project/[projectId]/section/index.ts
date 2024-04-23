// pages/api/projects/[projectId]/sections/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { addSectionToProject } from '@/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);

  const { method, query } = req;
  const projectId = query.projectId as string;

  switch (method) {
    case 'POST':
      return handleAddSection(req, res, projectId);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${method} Not Allowed`,
        })
      );
  }
};

const handleAddSection = async (
  req: NextApiRequest,
  res: NextApiResponse,
  projectId: string
) => {
  const { sectionName, chapters } = req.body;

  if (!sectionName || !chapters || !Array.isArray(chapters)) {
    return res.status(apiStatusCodes.BAD_REQUEST).json(
      sendAPIResponse({
        status: false,
        message: 'Invalid request body',
      })
    );
  }

  const sectionData = {
    sectionName,
    chapters,
  };

  const project = await addSectionToProject(projectId, sectionData);

  if (!project) {
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
      message: 'Section added successfully',
      data: project,
    })
  );
};

export default handler;
