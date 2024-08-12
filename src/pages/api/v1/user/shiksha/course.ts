import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import {
  getACourseForUserFromDB,
  updateUserCourseChapterInDB,
} from '@/database';
import { UpdateUserChapterInCourseRequestProps } from '@/interfaces';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await connectDB(res);

    const { method, query } = req;
    const { userId, courseId } = query as { userId: string; courseId: string };

    switch (method) {
      case 'PATCH':
        return handleUpdateChapterStatus(req, res);
      case 'GET':
        return handleGetCourseForUser(req, res, userId, courseId);
      default:
        return res.status(apiStatusCodes.BAD_REQUEST).json(
          sendAPIResponse({
            status: false,
            message: `Method ${req.method} Not Allowed`,
          })
        );
    }
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: `Something went wrong`,
        error,
      })
    );
  }
};

const handleUpdateChapterStatus = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { userId, courseId, chapterId, isCompleted } =
    req.body as UpdateUserChapterInCourseRequestProps;

  try {
    const { data, error } = await updateUserCourseChapterInDB({
      userId,
      courseId,
      chapterId,
      isCompleted,
    });

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed to update chapter status',
        })
      );
    }

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        data,
        message: 'Chapter status updated successfully',
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Failed to update chapter status',
        error,
      })
    );
  }
};

const handleGetCourseForUser = async (
  req: NextApiRequest,
  res: NextApiResponse,
  userId: string,
  courseId: string
) => {
  try {
    const { data, error } = await getACourseForUserFromDB(userId, courseId);

    if (error) {
      return res.status(apiStatusCodes.NOT_FOUND).json(
        sendAPIResponse({
          status: false,
          message: error,
        })
      );
    }

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        data,
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Failed to fetch courses with chapter status',
        error,
      })
    );
  }
};

export default handler;
