// Add Chapter API
import { NextApiRequest, NextApiResponse } from 'next';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import { updateChapterInSectionInDB } from '@/database';
import { UpdateChapterRequestPayloadProps } from '@/interfaces';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);

  const { method, query } = req;
  const { projectId, sectionId, chapterId } = query as {
    projectId: string;
    sectionId: string;
    chapterId: string;
  };

  switch (method) {
    case 'PATCH':
      return handleUpdateChapter(
        req,
        res,
        projectId as string,
        sectionId as string,
        chapterId as string
      );
    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${method} Not Allowed`,
        })
      );
  }
};

const handleUpdateChapter = async (
  req: NextApiRequest,
  res: NextApiResponse,
  projectId: string,
  sectionId: string,
  chapterId: string
) => {
  try {
    const { updatedChapterName, updatedChapterContent, updatedIsOptional } =
      req.body as UpdateChapterRequestPayloadProps;

    const { data, error } = await updateChapterInSectionInDB({
      projectId,
      sectionId,
      chapterId,
      updatedChapterName,
      updatedChapterContent,
      updatedIsOptional,
    });

    if (error) {
      return res.status(apiStatusCodes.NOT_FOUND).json(
        sendAPIResponse({
          status: false,
          message: 'Error updating chapter',
          error,
        })
      );
    }

    return res.status(apiStatusCodes.OKAY).json(
      sendAPIResponse({
        status: true,
        message: 'Chapter updated successfully',
        data,
      })
    );
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        message: 'Error updating chapter',
        error,
      })
    );
  }
};

export default handler;
