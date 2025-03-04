import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/middlewares';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { PlaylistByTags } from '@/database';

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
  const { skill } = req.query; // Extract 'skill' from URL

  if (!skill || typeof skill !== 'string') {
    return res.status(apiStatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Skill parameter is required',
    });
  }

  try {
    console.log(`Fetching playlists for skill: ${skill}`);

    const { data, error } = await PlaylistByTags(skill);

    if (error) {
      console.error('Database query error:', error);
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
    console.error('Unexpected error:', error);
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'An unexpected error occurred while fetching playlists',
      error,
    });
  }
};

export default handler;
