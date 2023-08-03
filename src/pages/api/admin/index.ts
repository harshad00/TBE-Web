import { addAnAdminToDB, getAnAdminByEmailFromDB } from '@/database';
import { AddAnAdminRequestPayload } from '@/interfaces';
import { connectDB, router, routerHandler } from '@/middlewares';
import type { NextApiRequest, NextApiResponse } from 'next';

// Add An Admin
const addAnAdmin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, googleId } = req.body as AddAnAdminRequestPayload;

  const admin = await getAnAdminByEmailFromDB(email);

  if (admin) {
    return res.status(400).json({ status: false, err: 'Admin already added' });
  }

  try {
    const admin = await addAnAdminToDB({ name, email, googleId });
    return res.status(201).json({
      status: true,
      message: 'Admin added successfully',
      lead: admin,
    });
  } catch (error: any) {
    return res.status(500).json({ status: false, err: error.message });
  }
};

router.use(connectDB).post(addAnAdmin);

export default routerHandler;
