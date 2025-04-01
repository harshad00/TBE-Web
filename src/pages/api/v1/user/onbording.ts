import { NextApiRequest, NextApiResponse } from 'next';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { UserOnboardInDB } from '@/database';
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
    const { userName, isOnboarded, profession, purpose, contactNo } =
      req.body as AddOnboardingPayloadProps;

    if (
      !userId ||
      !userName ||
      !profession ||
      !purpose ||
      !contactNo ||
      !isOnboarded
    ) {
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          error: 'Missing required fields',
          message: 'Please provide all required fields',
        })
      );
    }

    // Call the function to update or add onboarding data for the user
    const { data, error } = await UserOnboardInDB(
      userId,
      userName,
      isOnboarded,
      profession,
      purpose,
      contactNo
    );

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          error,
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
        error: error,
        message: 'Error while onboarding user',
      })
    );
  }
};

export default handler;
