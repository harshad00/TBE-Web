import type { NextApiRequest, NextApiResponse } from 'next';
import { envConfig, apiStatusCodes } from '@/constant';
import { isAdmin, sendAPIResponse } from '@/utils';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

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
