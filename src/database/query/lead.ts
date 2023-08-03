import { ProgramLead } from '..';
import { AddALeadRequestPayload } from '@/interfaces';

// Add A Lead to DB
const addALeadToDB = async ({
  name,
  email,
  phone,
  programName,
}: AddALeadRequestPayload) => {
  const newLead = new ProgramLead({ name, email, phone, programName });
  await newLead.save();

  return newLead;
};

// Get All Leads From DB
const getAllLeadsFromDB = async () => {
  return await ProgramLead.find();
};

// Get A Lead By ID
const getALeadByIDFromDB = async (id: string) => {
  return await ProgramLead.findById(id);
};

export { addALeadToDB, getAllLeadsFromDB, getALeadByIDFromDB };
