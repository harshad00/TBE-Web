import { NextApiRequest, NextApiResponse } from 'next';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import {
  addSectionToProjectInDB,
  getSectionsFromProjectInDB,
  updateSectionInProjectInDB,
} from '@/database';
import {
  AddSectionRequestPayloadProps,
  UpateSectionRequestPayloadProps,
} from '@/interfaces';
import { v4 } from 'uuid';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);

  const { method, query } = req;
  const projectId = query.projectId as string;

  switch (method) {
    case 'POST':
      return handleAddSection(req, res, projectId);
    case 'GET':
      return handleGetSections(res, projectId);
    case 'PATCH':
      return handleUpdateSection(req, res, projectId);
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
  let sectionData = req.body as AddSectionRequestPayloadProps;

  // Add sectionId to sectionData using uuid
  sectionData = {
    ...sectionData,
    sectionId: v4().replace(/-/g, ''),
  };

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
          error,
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

const handleGetSections = async (res: NextApiResponse, projectId: string) => {
  try {
    const { data, error } = await getSectionsFromProjectInDB(projectId);

    if (error) {
      return res.status(apiStatusCodes.NOT_FOUND).json(
        sendAPIResponse({
          status: false,
          message: 'Error fetching sections',
          error,
        })
      );
    }

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        message: 'Sections Fetched Successfully',
        data,
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Error fetching sections',
        error,
      })
    );
  }
};

const handleUpdateSection = async (
  req: NextApiRequest,
  res: NextApiResponse,
  projectId: string
) => {
  try {
    const { sectionId, updatedSectionName } =
      req.body as UpateSectionRequestPayloadProps;

    const { data, error } = await updateSectionInProjectInDB({
      projectId,
      sectionId,
      updatedSectionName,
    });

    if (error) {
      return res.status(apiStatusCodes.NOT_FOUND).json(
        sendAPIResponse({
          status: false,
          message: 'Error updating section',
          error,
        })
      );
    }

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        message: 'Section updated successfully',
        data,
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Error updating section',
        error,
      })
    );
  }
};

export default handler;
