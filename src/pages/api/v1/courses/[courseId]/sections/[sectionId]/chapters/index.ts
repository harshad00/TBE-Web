import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { AddCourseChapterInDBRequestProps } from '@/interfaces';
import { addCourseChapterToCourseSectionInDB } from '@/database/query/chapter';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);
  const { method, query } = req;
  const { sectionId } = query as { sectionId: string };

  switch (method) {
    case 'POST':
      return handleAddChapter(req, res, sectionId);
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${req.method} Not Allowed`,
        })
      );
  }
};

const handleAddChapter = async (
  req: NextApiRequest,
  res: NextApiResponse,
  sectionId: string
) => {
  const chapterData = req.body as AddCourseChapterInDBRequestProps;

  try {
    const { data, error } = await addCourseChapterToCourseSectionInDB({
      ...chapterData,
      sectionId,
    });

    if (error) {
      return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
        sendAPIResponse({
          status: false,
          message: 'Failed while adding chapter to section',
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
        message: 'Failed while adding chapter to section',
      })
    );
  }
};

export default handler;
