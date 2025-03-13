import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/middlewares';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { getJobsAggregationFromDB } from '@/database';

const DATA_FILE = path.resolve('data/unskilled.json');

const readJSON = (): any | null => {
  if (!fs.existsSync(DATA_FILE)) return null;
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  switch (req.method) {
    case 'GET':
      return handleFetchJobData(req, res);
    case 'POST':
      return handleAggregateJobData(req, res);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json({
        success: false,
        message: `Method ${req.method} not allowed`,
      });
  }
};

const handleFetchJobData = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const data = readJSON();
    const today = new Date().toISOString().split('T')[0];

    if (data && data.lastUpdated === today) {
      return res.status(apiStatusCodes.OKAY).json(
        sendAPIResponse({
          status: true,
          message: 'Job market insights fetched successfully',
          data,
        })
      );
    }

    return res.status(apiStatusCodes.NOT_FOUND).json(
      sendAPIResponse({
        status: false,
        message: 'No recent data found. Please run the aggregation.',
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Error fetching job market data',
        error,
      })
    );
  }
};

// 📌 **2️⃣ Handle POST Request → Aggregate & Store Job Data**
const handleAggregateJobData = async (
  _req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const today = new Date().toISOString().split('T')[0];

    const { error, data } = await getJobsAggregationFromDB();

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed to aggregate job data',
          error,
        })
      );
    }

    const aggregatedData = {
      lastUpdated: today,
      ...data,
    };

    fs.writeFileSync(DATA_FILE, JSON.stringify(aggregatedData, null, 2));

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        message: 'Job data aggregated and saved successfully',
        data: aggregatedData,
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'An unexpected error occurred while aggregating job data',
        error,
      })
    );
  }
};

export default handler;
