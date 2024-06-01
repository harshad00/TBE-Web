import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import {
  deleteCourseSectionByIdFromDB,
  getChapterAssociatedWithSectionByIdFromDB,
  updateCourseSectionInDB,
} from '@/database/query/section';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);
  const { method, query } = req;
  const { sectionId } = query as { sectionId: string };

  switch (method) {
    case 'GET':
      return handlerGetSectionById(req, res, sectionId);
    case 'PATCH':
      return handleUpdateCourseSection(req, res, sectionId);
    case 'DELETE':
      return handleDeleteCourseSection(req, res, sectionId);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${req.method} Not Allowed`,
        })
      );
  }
};

const handleUpdateCourseSection = async (
  req: NextApiRequest,
  res: NextApiResponse,
  sectionId: string
) => {
  const updatedData = req.body as { title: string };

  try {
    const { data, error } = await updateCourseSectionInDB({
      updatedData,
      sectionId,
    });

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: "Failed while updating course's section",
          error,
        })
      );
    }

    return res
      .status(apiStatusCodes.OKAY)
      .json(sendAPIResponse({ status: true, data }));
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: "Failed while updating course's section",
        error,
      })
    );
  }
};

const handleDeleteCourseSection = async (
  req: NextApiRequest,
  res: NextApiResponse,
  sectionId: string
) => {
  try {
    const { error } = await deleteCourseSectionByIdFromDB(sectionId);

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: "Failed while deleting course's section",
          error,
        })
      );
    }

    return res
      .status(apiStatusCodes.OKAY)
      .json(sendAPIResponse({ status: true, data: null }));
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: "Failed while deleting course's section",
        error,
      })
    );
  }
};

const handlerGetSectionById = async (
  req: NextApiRequest,
  res: NextApiResponse,
  sectionId: string
) => {
  try {
    const { data, error } = await getChapterAssociatedWithSectionByIdFromDB(
      sectionId
    );

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed while fetching section',
        })
      );
    }

    return res
      .status(apiStatusCodes.OKAY)
      .json(sendAPIResponse({ status: true, data }));
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Failed while fetching section',
      })
    );
  }
};

export default handler;
