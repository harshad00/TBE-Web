import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/middlewares';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { addJobToDB, getAllJobsFromDB } from '@/database';
import { AddJobRequestPayloadProps } from '@/interfaces';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB();

  switch (req.method) {
    case 'POST':
      return handleAddJob(req, res);
    case 'GET':
      return handleGetJobs(req, res);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json({
        success: false,
        message: `Method ${req.method} not allowed`,
      });
  }
};

const handleAddJob = async (req: NextApiRequest, res: NextApiResponse) => {
  const jobPayload = req.body as AddJobRequestPayloadProps;

  const { company, skills, role, location, jobUrl, platform } = jobPayload;

  if (!company || !role || !location || !jobUrl || !platform || !skills) {
    return res.status(apiStatusCodes.BAD_REQUEST).json({
      success: false,
      message: 'Missing required job details',
    });
  }

  try {
    const { error, data: newJob } = await addJobToDB(jobPayload);

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed to add job',
          error,
        })
      );
    }

    return res.status(apiStatusCodes.RESOURCE_CREATED).json(
      sendAPIResponse({
        status: true,
        message: 'Job added successfully!',
        data: newJob,
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'An unexpected error occurred',
      error,
    });
  }
};

const handleGetJobs = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await getAllJobsFromDB();

  if (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Error fetching jobs',
      error,
    });
  }

  return res.status(apiStatusCodes.OKAY).json(
    sendAPIResponse({
      status: true,
      message: 'Jobs fetched successfully',
      data,
    })
  );
};

export default handler;
