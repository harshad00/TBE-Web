import { CohortLead } from '..';
import { AddALeadRequestPayload } from '@/interfaces';

// Add A Lead to DB
const addALeadToDB = async ({
  name,
  email,
  phone,
  cohortName,
}: AddALeadRequestPayload) => {
  const newLead = new CohortLead({ name, email, phone, cohortName });
  await newLead.save();

  return newLead;
};

// Get All Leads From DB
const getAllLeadsFromDB = async () => {
  return await CohortLead.find();
};

// Get A Lead By ID
const getALeadByIDFromDB = async (id: string) => {
  return await CohortLead.findById(id);
};

export { addALeadToDB, getAllLeadsFromDB, getALeadByIDFromDB };
