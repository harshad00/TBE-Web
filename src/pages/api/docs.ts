import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const swaggerBasePath = path.join(process.cwd(), 'docs', 'swagger-base.json');
  const swaggerBase = fs.readFileSync(swaggerBasePath, 'utf8');
  res.status(200).json(swaggerBase);
};

export default handler;
