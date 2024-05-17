import { NextApiRequest, NextApiResponse } from 'next';
import User from '@/database/models/User';
import { apiStatusCodes } from '@/constant';
import { sendAPIResponse } from '@/utils';
import { connectDB } from '@/middlewares';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectDB(res);

  const { method } = req;

  switch (method) {
    case 'GET':
      return handleGetAllUser(req, res);
    case 'POST':
      return handleCreateUser(req, res);
  }
};

const handleGetAllUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await User.find({});
    return res
      .status(apiStatusCodes.OKAY)
      .json(sendAPIResponse({ status: true, data: users }));
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
    const body: { email: string; name: string } = JSON.parse(req.body);

    if (!body || !body.email || !body.name)
      throw new Error('name & email is required');

    const user = await User.findOne({ email: body.email });
    if (!user) {
      const newUser = await User.create({ name: body.name, email: body.email });
      return res
        .status(apiStatusCodes.OKAY)
        .json(sendAPIResponse({ status: true, data: newUser }));
    } else {
      return res
        .status(apiStatusCodes.OKAY)
        .json(sendAPIResponse({ status: true, data: user }));
    }
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

export default handler;
