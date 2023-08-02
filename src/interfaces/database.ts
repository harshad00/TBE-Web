import { Document } from 'mongoose';
import { ProgramLeadStatus, ProgramName } from './global';

export interface ProgramLeadDocument extends Document {
  name: string;
  email: string;
  phone: string;
  programName: ProgramName;
  status: ProgramLeadStatus;
}
