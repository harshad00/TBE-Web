import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { createMarkdownPayload, sendAPIResponse } from '@/utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return generateMDXContent(req, res);

    default:
      return res.status(apiStatusCodes.BAD_REQUEST).json(
        sendAPIResponse({
          status: false,
          message: `Method ${req.method} Not Allowed`,
        })
      );
  }
};

const generateMDXContent = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const mdxPayload = createMarkdownPayload();

  return res.status(apiStatusCodes.OKAY).json(
    sendAPIResponse({
      status: true,
      message: 'Here is Project MDX',
      data: { mdxPayload },
    })
  );
};

export default handler;
