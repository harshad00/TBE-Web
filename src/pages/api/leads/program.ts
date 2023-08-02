import { addALeadToDB } from '@/database';
import { AddALeadRequestPayload } from '@/interfaces';
import { connectDB, router, routerHandler } from '@/middlewares';
import type { NextApiRequest, NextApiResponse } from 'next';

// Add A Lead
const addALead = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, phone, programName } =
    req.body as AddALeadRequestPayload;

  try {
    const newLead = await addALeadToDB({ name, email, phone, programName });
    res.status(201).json({ message: 'Lead added successfully', lead: newLead });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

router.use(connectDB).post(addALead);

export default routerHandler;
