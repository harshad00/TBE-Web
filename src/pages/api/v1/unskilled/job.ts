import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/middlewares';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import {
  addJobToDB,
  getAllJobsFromDB,
  getJobByCustomIdFromDB,
} from '@/database';
import { AddJobRequestPayloadProps } from '@/interfaces';

/**
 * @swagger
 * /api/v1/unskilled/job:
 *   get:
 *     summary: Get all unskilled jobs
 *     description: Fetch a paginated list of unskilled jobs.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of jobs per page
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Server error
 */

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
  try {
    const jobPayload = req.body as AddJobRequestPayloadProps;
    const { id, company, skills, role, location, jobUrl, platform } =
      jobPayload;

    if (
      !id ||
      !company ||
      !role ||
      !location ||
      !jobUrl ||
      !platform ||
      !skills
    ) {
      return res.status(apiStatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Missing required job details',
      });
    }

    const { data: existingJob } = await getJobByCustomIdFromDB(id);

    if (existingJob) {
      return res.status(apiStatusCodes.BAD_REQUEST).json({
        success: false,
        message: 'Job already exists',
      });
    }

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
      message: 'An unexpected error occurred while adding the job',
      error,
    });
  }
};

const handleGetJobs = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { page = '1', limit = '10', role, location, skills } = req.query;

    const pageNumber = parseInt(page as string, 10) || 1;
    const pageSize = parseInt(limit as string, 10) || 10;

    const query: any = {};

    if (role) query.role = new RegExp(role as string, 'i');
    if (location) query.location = new RegExp(location as string, 'i');
    if (skills) query.skills = { $in: (skills as string).split(',') };

    const { data, error } = await getAllJobsFromDB(query, pageNumber, pageSize);

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
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'An unexpected error occurred while fetching jobs',
      error,
    });
  }
};

export default handler;
