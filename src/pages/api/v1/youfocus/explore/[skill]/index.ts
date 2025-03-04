import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/middlewares';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { playlistByTagFromDB } from '@/database';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  switch (req.method) {
    case 'GET':
      return handleGetPlaylistsBySkill(req, res);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json({
        success: false,
        message: `Method ${req.method} not allowed`,
      });
  }
};

const handleGetPlaylistsBySkill = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { skill } = req.query;

  if (!skill || typeof skill !== 'string') {
    return res.status(apiStatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Skill parameter is required',
    });
  }

  try {
    const { data, error } = await playlistByTagFromDB(skill);

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: 'Error fetching YouFocus playlists',
        error,
      });
    }

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        message: 'Playlists fetched successfully',
        data,
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'An unexpected error occurred while fetching playlists',
      error,
    });
  }
};

export default handler;
