import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { AddCourseRequestPayloadProps } from '@/interfaces';
import {
  deleteACourseFromDBById,
  updateACourseInDB,
  getACourseFromDBById,
} from '@/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);
  const { method, query } = req;
  const { courseId } = query as { courseId: string };

  switch (method) {
    case 'GET':
      return handleGetCourseById(req, res, courseId);
    case 'DELETE':
      return handleDeleteCourse(req, res, courseId);
    case 'PATCH':
      return handleUpdateCourse(req, res, courseId);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${req.method} Not Allowed`,
        })
      );
  }
};

const handleDeleteCourse = async (
  req: NextApiRequest,
  res: NextApiResponse,
  courseId: string
) => {
  try {
    const { error } = await deleteACourseFromDBById(courseId);

    if (error)
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed while deleting course',
          error: error,
        })
      );

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        data: null,
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Failed while deleting course',
        error: error,
      })
    );
  }
};

const handleUpdateCourse = async (
  req: NextApiRequest,
  res: NextApiResponse,
  courseId: string
) => {
  const updatedData = req.body as Partial<AddCourseRequestPayloadProps>;

  const { error } = await getACourseFromDBById(courseId);

  if (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Failed while updating a course',
        error,
      })
    );
  }

  try {
    const { data, error } = await updateACourseInDB({
      updatedData,
      courseId,
    });

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed while updating course',
          error,
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
        message: 'Failed while updating course',
        error,
      })
    );
  }
};

const handleGetCourseById = async (
  req: NextApiRequest,
  res: NextApiResponse,
  courseId: string
) => {
  try {
    const { data, error } = await getACourseFromDBById(courseId);

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed while fetching a course',
          error,
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
        message: 'Failed while fetching a course',
        error,
      })
    );
  }
};

export default handler;
