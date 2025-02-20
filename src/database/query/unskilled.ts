import { AddJobRequestPayloadProps } from '@/interfaces';
import { Job } from '@/database';

// Add A Job
const addJobToDB = async (jobPayload: AddJobRequestPayloadProps) => {
  try {
    const newJob = new Job(jobPayload);
    const savedJob = await newJob.save();
    return { data: savedJob };
  } catch (error) {
    return { error };
  }
};

// Get All Jobs
const getAllJobsFromDB = async () => {
  try {
    const jobs = await Job.find();
    if (!jobs || jobs.length === 0) {
      return { error: 'No jobs found' };
    }

    return { data: jobs };
  } catch (error) {
    return { error };
  }
};

export { addJobToDB, getAllJobsFromDB };
