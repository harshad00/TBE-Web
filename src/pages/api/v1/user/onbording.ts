import { NextApiRequest, NextApiResponse } from 'next';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { addUserOnboardInDB } from '@/database/query/user';
import { AddOnboardingPayloadProps } from '@/interfaces';

const onboarding = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  const { method } = req;
  const { userId } = req.query as { userId: string };

  switch (method) {
    case 'POST':
      return handleUserOnboarding(req, res, userId);
    default:
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Method not allowed',
          error: 'Only POST method is allowed',
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
    const { onboardData, name, profession, purpose, contactNo } =
      req.body as AddOnboardingPayloadProps;

    if (!userId || !name || !profession || !purpose) {
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          error: 'Missing required fields',
          message: 'Please provide all required fields',
        })
      );
    }

    // Call the function to update or add onboarding data for the user
    const { data, error } = await addUserOnboardInDB(
      userId,
      onboardData,
      name,
      profession,
      purpose,
      contactNo || ''
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

export default onboarding;
