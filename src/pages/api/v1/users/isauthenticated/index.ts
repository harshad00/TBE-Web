import { NextApiRequest, NextApiResponse } from 'next';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ServerSessionProp } from '@/interfaces';
import { getUserByEmailFromDB } from '@/database/query/user';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);

  const { method } = req;
  switch (method) {
    case 'GET':
      return handleIsLoggedIn(req, res);
  }
};

const handleIsLoggedIn = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session: ServerSessionProp | null = await getServerSession(
      req,
      res,
      authOptions
    );

    if (!session || !session.user || !session.user.email)
      return res.status(apiStatusCodes.UNAUTHORIZED).json(
        sendAPIResponse({
          status: false,
          error: 'Unauthenticated, please login again.',
          message: 'Unauthenticated, please login again.',
        })
      );

    const { data, error } = await getUserByEmailFromDB(session.user.email);
    if (error)
      return res.status(apiStatusCodes.UNAUTHORIZED).json(
        sendAPIResponse({
          status: false,
          error: 'Unauthenticated, please login again.',
          message: 'Unauthenticated, please login again.',
        })
      );

    return res
      .status(apiStatusCodes.OKAY)
      .json(sendAPIResponse({ status: true, data }));
  } catch (error) {
    return res.status(apiStatusCodes.UNAUTHORIZED).json(
      sendAPIResponse({
        status: false,
        error: 'Unauthenticated, please login again.',
        message: 'Unauthenticated, please login again.',
      })
    );
  }
};

export default handler;
