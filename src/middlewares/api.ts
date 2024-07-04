import type { NextApiResponse } from 'next';
import { envConfig, apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import mongoose from 'mongoose';

// Connect to DB
const connectDB = async (res: NextApiResponse) => {
  try {
    await mongoose.connect(envConfig.MONGODB_URI);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: `DB error by passing ${envConfig.MONGODB_URI}`,
        error,
      })
    );
  }
};

export { connectDB };
