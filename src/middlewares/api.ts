import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/database';

// Connect to DB
const connectDB = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) => {
  await connectToDatabase();
  next();
};

export { connectDB };
