import { ProgramLeadStatus, ProgramName } from './global';
import { AddALeadRequestPayload, AddAnAdminRequestPayload } from './api';

export interface ProgramLead extends AddALeadRequestPayload {
  name: string;
  email: string;
  phone: string;
  programName: ProgramName;
}

export interface ProgramLeadDocumentModel extends ProgramLead {
  status: ProgramLeadStatus;
}

export interface AdminUserDocumentModel extends AddAnAdminRequestPayload {
  name: string;
  email: string;
  googleId: string;
}
