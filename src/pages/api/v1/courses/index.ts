import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { AddCourseDBRequestProps } from '@/interfaces';
import { addACourseToDB, getAllCoursesFromDB } from '@/database/query/course';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);
  const { method } = req;

  switch (method) {
    case 'GET':
      return handleGetAllCourse(req, res);
    case 'POST':
      return handleAddACourse(req, res);
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
    const courseDetails = req.body as AddCourseDBRequestProps;
    const { data, error } = await addACourseToDB(courseDetails);

    if (error)
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Error deleting project',
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
        message: 'Error deleting project',
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
          message: `failed while fetching all courses`,
        })
      );
    return res
      .status(apiStatusCodes.OKAY)
      .json(sendAPIResponse({ data, status: true }));
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: `failed while fetching all courses`,
      })
    );
  }
};

export default handler;
