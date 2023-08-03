import {
  addALeadToDB,
  getALeadByIDFromDB,
  getAllLeadsFromDB,
} from '@/database';
import {
  AddALeadRequestPayload,
  UpdateALeadRequestPayload,
} from '@/interfaces';
import { connectDB, router, routerHandler } from '@/middlewares';
import type { NextApiRequest, NextApiResponse } from 'next';

// Add A Lead
const addALead = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, phone, programName } =
    req.body as AddALeadRequestPayload;

  try {
    const newLead = await addALeadToDB({ name, email, phone, programName });
    return res.status(201).json({
      status: true,
      message: 'Lead added successfully',
      lead: newLead,
    });
  } catch (error: any) {
    return res.status(500).json({ status: false, err: error.message });
  }
};

// Get All Leads
const getAllLeads = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const leads = await getAllLeadsFromDB();

    return res
      .status(201)
      .json({ status: true, message: 'Lead added successfully', lead: leads });
  } catch (error: any) {
    return res.status(500).json({ status: false, err: error.message });
  }
};

// Update A Lead By ID
const updateLeadByID = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, status } = req.body as UpdateALeadRequestPayload;

    const lead = await getALeadByIDFromDB(id);

    if (!lead) {
      return res.status(400).json({ status: false, err: 'Lead not found' });
    }

    lead.status = status;
    await lead.save();

    return res
      .status(201)
      .json({ status: true, message: 'Lead updated successfully', lead: lead });
  } catch (error: any) {
    return res.status(500).json({ status: false, err: error.message });
  }
};

router.use(connectDB).get(getAllLeads).post(addALead).patch(updateLeadByID);

export default routerHandler;
