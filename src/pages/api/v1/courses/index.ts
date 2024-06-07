import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { isAdmin, sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { AddCourseDBRequestProps } from '@/interfaces';
import { addACourseToDB, getAllCoursesFromDB } from '@/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]';
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
    const session = await getServerSession(req, res, authOptions);

    if (!session || !session.user || !session.user.email)
      return res.status(apiStatusCodes.UNAUTHORIZED).json(
        sendAPIResponse({
          status: false,
          message: "You aren't logged in.",
        })
      );

    if (!isAdmin(session.user.email))
      return res.status(apiStatusCodes.UNAUTHORIZED).json(
        sendAPIResponse({
          status: false,
          message: "You aren't permitted to add course",
        })
      );

    const courseDetails = req.body as AddCourseDBRequestProps;
    const { data, error } = await addACourseToDB(courseDetails);

    if (error)
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed while adding course',
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
