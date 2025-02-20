import { NextApiRequest, NextApiResponse } from 'next';
import { getApiDocs } from '@/lib';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const spec = await getApiDocs();
  res.status(200).json(spec);
};

export default handler;
