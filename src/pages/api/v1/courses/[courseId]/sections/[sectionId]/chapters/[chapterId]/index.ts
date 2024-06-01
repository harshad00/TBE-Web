import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { AddCourseChapterInDBRequestProps } from '@/interfaces';
import {
  deleteCourseChapterByIdFromDB,
  updateCourseChapterInDB,
} from '@/database/query/chapter';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);
  const { method, query } = req;
  const { chapterId } = query as { chapterId: string };

  switch (method) {
    case 'POST':
      return handleUpdateChapter(req, res, chapterId);

    case 'DELETE':
      return handleDeleteChapter(req, res, chapterId);

    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${req.method} Not Allowed`,
        })
      );
  }
};

const handleUpdateChapter = async (
  req: NextApiRequest,
  res: NextApiResponse,
  chapterId: string
) => {
  const updatedData = req.body as Partial<AddCourseChapterInDBRequestProps>;

  try {
    const { data, error } = await updateCourseChapterInDB({
      updatedData,
      chapterId,
    });

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed while updating chapter to section',
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
        message: 'Failed while updating chapter to section',
      })
    );
  }
};

const handleDeleteChapter = async (
  req: NextApiRequest,
  res: NextApiResponse,
  chapterId: string
) => {
  try {
    const { data, error } = await deleteCourseChapterByIdFromDB(chapterId);

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed while deleting chapter to section',
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
        message: 'Failed while deleting chapter to section',
      })
    );
  }
};

export default handler;
