import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/middlewares';
import { apiStatusCodes } from '@/constant';
import { updateGamificationRecord } from '@/database';
import { UpdateGamificationRecordBody } from '@/interfaces';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();
  const { query } = req;
  const { userId } = query as { userId: string };

  switch (req.method) {
    case 'POST':
      return handleUpdateGamificationRecord(req, res, userId);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json({
        success: false,
        message: `Method ${req.method} not allowed`,
      });
  }
};

const handleUpdateGamificationRecord = async (
  req: NextApiRequest,
  res: NextApiResponse,
  userId: string
) => {
  const { body } = req;
  const { gamificationRecordId } = body as UpdateGamificationRecordBody; // Use the defined interface

  if (!gamificationRecordId) {
    // Check for missing gamificationRecordId
    return res.status(apiStatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Missing required fields',
    });
  }

  // Call the updateGamificationRecord function with the userId and gamificationRecordId
  const result = await updateGamificationRecord(userId, gamificationRecordId);
  return res.status(apiStatusCodes.OKAY).json({
    success: true,
    message: 'Gamification record updated successfully',
    data: result,
  });
};

export default handler;
