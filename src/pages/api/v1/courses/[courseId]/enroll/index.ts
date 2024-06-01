import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { checkTheLoggedInUser, sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { enrollInACourse } from '@/database/query/userCourse';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getServerSession(req, res, authOptions);
    await connectDB(res);
    const { method, query } = req;
    const { courseId } = query as { courseId: string };

    switch (method) {
      case 'POST':
        return handleCourseEnrollment(req, res, courseId, session);
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

const handleCourseEnrollment = async (
  req: NextApiRequest,
  res: NextApiResponse,
  courseId: string,
  session: Session | null
) => {
  try {
    if (!session || !session.user || !session.user.email)
      return res.status(apiStatusCodes.UNAUTHORIZED).json(
        sendAPIResponse({
          status: false,
          message: 'Unauthorized, please login before enrolling in course',
        })
      );

    const userId = await checkTheLoggedInUser(session.user.email);
    if (!userId)
      return res.status(apiStatusCodes.UNAUTHORIZED).json(
        sendAPIResponse({
          status: false,
          message: 'Unauthorized, please login before enrolling in course',
        })
      );

    const { data, error } = await enrollInACourse({ userId, courseId });

    if (error)
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed while enrolling course',
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
        message: 'Failed while enrolling course',
        error: error,
      })
    );
  }
};

export default handler;
