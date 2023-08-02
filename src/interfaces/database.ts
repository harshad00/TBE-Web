import { ProgramLeadStatus, ProgramName } from './global';
import { AddALeadRequestPayload } from './api';

export interface ProgramLead extends AddALeadRequestPayload {
  name: string;
  email: string;
  phone: string;
  programName: ProgramName;
}

export interface ProgramLeadDocumentModel extends ProgramLead {
  status: ProgramLeadStatus;
}
