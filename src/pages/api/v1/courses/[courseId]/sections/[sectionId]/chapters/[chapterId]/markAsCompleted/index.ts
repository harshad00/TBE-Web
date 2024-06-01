import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { checkTheLoggedInUser, sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Session, getServerSession } from 'next-auth';
import { MarkChapterAsCompleted } from '@/database/query/userCourse';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getServerSession(req, res, authOptions);
    await connectDB(res);
    const { method, query } = req;
    const { courseId, chapterId, sectionId } = query as {
      courseId: string;
      chapterId: string;
      sectionId: string;
    };

    switch (method) {
      case 'POST':
        return handleMarkChapter(
          req,
          res,
          courseId,
          chapterId,
          sectionId,
          session
        );
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

const handleMarkChapter = async (
  req: NextApiRequest,
  res: NextApiResponse,
  courseId: string,
  chapterId: string,
  sectionId: string,
  session: Session | null
) => {
  try {
    if (!session || !session.user || !session.user.email)
      return res.status(apiStatusCodes.UNAUTHORIZED).json(
        sendAPIResponse({
          status: false,
          message: 'Unauthorized, please login',
        })
      );

    const userId = await checkTheLoggedInUser(session.user.email);
    if (!userId)
      return res.status(apiStatusCodes.UNAUTHORIZED).json(
        sendAPIResponse({
          status: false,
          message: 'Unauthorized, please login',
        })
      );
    const { data, error } = await MarkChapterAsCompleted({
      courseId,
      userId,
      sectionId,
      chapterId,
    });
    if (error)
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed while marking chapter.',
        })
      );

    return res
      .status(apiStatusCodes.OKAY)
      .json(sendAPIResponse({ status: true, data }));
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Failed while marking chapter.',
      })
    );
  }
};

export default handler;
