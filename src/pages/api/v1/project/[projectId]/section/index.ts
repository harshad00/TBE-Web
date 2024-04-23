// pages/api/projects/[projectId]/sections/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { addSectionToProjectInDB } from '@/database';
import { AddSectionRequestPayloadProps } from '@/interfaces';

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
  const sectionData = req.body as AddSectionRequestPayloadProps;

  try {
    const { data, error } = await addSectionToProjectInDB(
      projectId,
      sectionData
    );

    if (error) {
      return res.status(apiStatusCodes.NOT_FOUND).json(
        sendAPIResponse({
          status: false,
          message: 'Error fetching project',
          error: error.message,
        })
      );
    }

    return res.status(apiStatusCodes.RESOURCE_CREATED).json(
      sendAPIResponse({
        status: true,
        message: 'Section Added Successfully',
        data,
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Error fetching project',
        error,
      })
    );
  }
};

export default handler;
