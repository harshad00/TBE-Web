import { NextApiRequest, NextApiResponse } from 'next';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
import {
  createUserInDB,
  getUserByEmailFromDB,
  getUserByIdFromDB,
} from '@/database/query/user';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);
  const { method } = req;
  switch (method) {
    case 'GET':
      return handleGetUser(req, res);
    case 'POST':
      return handleCreateUser(req, res);
  }
};

const handleGetUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const filter: Partial<{ [key: string]: string | string[] }> = req.query;
    const { email, userId } = filter;
    if (email) {
      const { data, error } = await getUserByEmailFromDB({
        email: email as string,
      });
      if (error) throw error;
      return res
        .status(apiStatusCodes.OKAY)
        .json(sendAPIResponse({ status: true, data }));
    }
    if (userId) {
      const { data, error } = await getUserByIdFromDB({ id: userId as string });
      if (error) throw error;
      return res
        .status(apiStatusCodes.OKAY)
        .json(sendAPIResponse({ status: true, data }));
    }
    throw new Error('please provide email or user id');
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        error,
        message: 'error while fetching users',
      })
    );
  }
};

const handleCreateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body: { email: string; name: string } = req.body;
    const { email, name } = body;
    if (!email || !name) throw new Error('name & email is required');
    const { data, error } = await getUserByEmailFromDB({ email });
    if (error) throw error;
    if (!data) {
      const { data, error } = await createUserInDB({ name, email });
      if (error) throw error;
      return res
        .status(apiStatusCodes.OKAY)
        .json(sendAPIResponse({ status: true, data }));
    } else {
      return res
        .status(apiStatusCodes.OKAY)
        .json(sendAPIResponse({ status: true, data }));
    }
  } catch (error) {
    return res.status(apiStatusCodes.INTERNAL_SERVER_ERROR).json(
      sendAPIResponse({
        status: false,
        error,
        message: 'error while creating user',
      })
    );
  }
};

export default handler;
