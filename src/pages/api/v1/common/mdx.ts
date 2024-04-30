import fs from 'fs';
import path from 'path';
import { apiStatusCodes } from '@/constant';
import { NextApiRequest, NextApiResponse } from 'next';
import { sendAPIResponse } from '@/utils';

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
  // Read the MD file synchronously
  const mdFilePath = path.join(
    process.cwd(),
    'src',
    'utils',
    'mdx',
    'testing.md'
  );
  const mdxPayload = fs.readFileSync(mdFilePath, 'utf8');

  return res.status(apiStatusCodes.OKAY).json(
    sendAPIResponse({
      status: true,
      message: 'Here is Project MDX',
      data: { mdxPayload },
    })
  );
};

export default handler;
