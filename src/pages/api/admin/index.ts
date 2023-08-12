import { addAnAdminToDB, getAnAdminByEmailFromDB } from '@/database';
import { AddAnAdminRequestPayload } from '@/interfaces';
import { connectDB, router, routerHandler } from '@/middlewares';
import type { NextApiRequest, NextApiResponse } from 'next';

// Add An Admin
const addAnAdmin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, image } = req.body as AddAnAdminRequestPayload;

  const admin = await getAnAdminByEmailFromDB(email);

  if (admin) {
    return res.status(400).json({ status: false, err: 'Admin already added' });
  }

  try {
    const admin = await addAnAdminToDB({ name, email, image });
    return res.status(201).json({
      status: true,
      message: 'Admin added successfully',
      lead: admin,
    });
  } catch (error: any) {
    return res.status(500).json({ status: false, err: error.message });
  }
};

// Get Admin by Email
const getAdminByEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.query;

  try {
    const admin = await getAnAdminByEmailFromDB(email as string);

    if (!admin) {
      return res.status(400).json({ status: false, err: 'Admin not found' });
    }

    return res.status(400).json({ status: true, data: admin });
  } catch (error: any) {
    return res.status(500).json({ status: false, err: 'Admin not found' });
  }
};

router.use(connectDB).post(addAnAdmin).get(getAdminByEmail);

export default routerHandler;
