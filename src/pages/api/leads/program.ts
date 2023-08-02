import { ProgramLead } from '@/database';
import { connectDB, router, routerHandler } from '@/middlewares';
import type { NextApiRequest, NextApiResponse } from 'next';

// Add A Lead
const addALead = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, phone, programName } = req.body;

  const newLead = new ProgramLead({ name, email, phone, programName });
  await newLead.save();

  res.status(201).json({ message: 'Lead added successfully', lead: newLead });
};

router.use(connectDB).post(addALead);

export default routerHandler;
