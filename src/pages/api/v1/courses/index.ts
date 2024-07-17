import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { AddCourseRequestPayloadProps } from '@/interfaces';
import {
  addACourseToDB,
  getAllCoursesFromDB,
  getCourseBySlugFromDB,
} from '@/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);
  console.log('HERE', 1);

  switch (req.method) {
    case 'POST':
      return handleAddACourse(req, res);
    case 'GET':
      return handleGetAllCourse(req, res);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${req.method} Not Allowed`,
        })
      );
  }
};

const handleAddACourse = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const coursePayload = req.body as AddCourseRequestPayloadProps;

    const { error: courseAlreadyExist } = await getCourseBySlugFromDB(
      coursePayload.slug
    );

    if (!courseAlreadyExist) {
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: 'Course already exists',
        })
      );
    }

    const { data, error } = await addACourseToDB(coursePayload);

    if (error)
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Course not added',
          error: error,
        })
      );

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
        message: 'Failed while adding course',
        error: error,
      })
    );
  }
};

const handleGetAllCourse = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { data, error } = await getAllCoursesFromDB();
    if (error)
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: `Failed while fetching all courses`,
        })
      );
    return res
      .status(apiStatusCodes.OKAY)
      .json(sendAPIResponse({ data, status: true }));
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: `Failed while fetching all courses`,
      })
    );
  }
};

export default handler;
