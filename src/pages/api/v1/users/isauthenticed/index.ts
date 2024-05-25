import { NextApiRequest, NextApiResponse } from 'next';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ServerSessionProp } from '@/interfaces';

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
      throw new Error('unauthenticated');
    return res
      .status(apiStatusCodes.OKAY)
      .json(sendAPIResponse({ status: true, data: session }));
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        error,
        message: 'error while fetching users',
      })
    );
  }
};

export default handler;
