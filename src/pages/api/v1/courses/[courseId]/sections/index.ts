import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { AddSectionToACourseDBRequestProps } from '@/interfaces';
import { AddSectionToACourseInDB } from '@/database/query/section';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);
  const { method, query } = req;
  const { courseId } = query as {
    courseId: string;
  };

  switch (method) {
    case 'POST':
      return handleAddSection(req, res, courseId);

    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${req.method} Not Allowed`,
        })
      );
  }
};

const handleAddSection = async (
  req: NextApiRequest,
  res: NextApiResponse,
  courseId: string
) => {
  const sectionData = req.body as AddSectionToACourseDBRequestProps;

  try {
    const { data, error } = await AddSectionToACourseInDB({
      ...sectionData,
      courseId,
    });

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed while adding section to course',
        })
      );
    }

    return res
      .status(apiStatusCodes.OKAY)
      .json(sendAPIResponse({ status: true, data }));
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Failed while adding section to course',
      })
    );
  }
};

export default handler;
