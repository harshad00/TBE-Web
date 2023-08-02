import { addALeadToDB, getAllLeadsFromDB } from '@/database';
import { AddALeadRequestPayload } from '@/interfaces';
import { connectDB, router, routerHandler } from '@/middlewares';
import type { NextApiRequest, NextApiResponse } from 'next';

// Add A Lead
const addALead = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, phone, programName } =
    req.body as AddALeadRequestPayload;

  try {
    const newLead = await addALeadToDB({ name, email, phone, programName });
    res.status(201).json({
      status: true,
      message: 'Lead added successfully',
      lead: newLead,
    });
  } catch (error: any) {
    res.status(500).json({ status: false, err: error.message });
  }
};

// Add A Lead
const getAllLeads = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const leads = await getAllLeadsFromDB();

    res
      .status(201)
      .json({ status: true, message: 'Lead added successfully', lead: leads });
  } catch (error: any) {
    res.status(500).json({ status: false, err: error.message });
  }
};

router.use(connectDB).get(getAllLeads).post(addALead);

export default routerHandler;
