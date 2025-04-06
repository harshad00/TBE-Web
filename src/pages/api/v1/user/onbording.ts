import { NextApiRequest, NextApiResponse } from 'next';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { onboardUserToDB, getUserByUserNameFromDB } from '@/database';
import { AddOnboardingPayloadProps } from '@/interfaces';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  const { method } = req;
  const { userId } = req.query as { userId: string };

  switch (method) {
    case 'POST':
      return handleUserOnboarding(req, res, userId);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${req.method} Not Allowed`,
        })
      );
  }
};

const handleUserOnboarding = async (
  req: NextApiRequest,
  res: NextApiResponse,
  userId: string
) => {
  try {
    const { userName, profession, purpose, contactNo } =
      req.body as AddOnboardingPayloadProps;

    if (!userId || !userName || !profession || !purpose || !contactNo) {
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          error: 'Missing required fields',
          message: 'Please provide all required fields',
        })
      );
    }

    const { error } = await getUserByUserNameFromDB(userName);

    if (error) {
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          error,
          message: 'Username already exists, please choose another',
        })
      );
    }

    const { data, error: updateUserError } = await onboardUserToDB(
      userId,
      userName,
      profession,
      purpose,
      contactNo
    );

    if (updateUserError) {
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          error: updateUserError,
          message: 'Error while onboarding user',
        })
      );
    }

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        data,
        message: 'User onboarded successfully',
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        error,
        message: 'Error while onboarding user',
      })
    );
  }
};

export default handler;
