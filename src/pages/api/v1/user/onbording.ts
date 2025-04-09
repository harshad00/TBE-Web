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
    case 'GET':
      return getUserByUserNameOnboarding(req, res);
    case 'POST':
      return handleUserOnboarding(req, res, userId);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${method} Not Allowed`,
        })
      );
  }
};

const getUserByUserNameOnboarding = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { userName } = req.query as { userName: string };

  if (!userName) {
    return res.status(apiStatusCodes.BAD_REQUEST).json(
      sendAPIResponse({
        status: false,
        message: 'Username is required',
      })
    );
  }

  try {
    const { data, error } = await getUserByUserNameFromDB(userName);

    if (error) {
      // Username already exists
      return res.status(apiStatusCodes.OKAY).json(
        sendAPIResponse({
          status: false,
          message: 'Username already taken. Please choose another.',
        })
      );
    }

    // Username is available
    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        data,
        message: 'Username is available.',
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Error while checking username',
        error,
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
