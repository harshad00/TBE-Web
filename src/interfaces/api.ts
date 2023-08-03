import { ProgramLeadStatus, ProgramName } from '.';

export interface AddALeadRequestPayload {
  name: string;
  email: string;
  phone: string;
  programName: ProgramName;
}

export interface UpdateALeadRequestPayload {
  id: string;
  status: ProgramLeadStatus;
}

export interface AddAnAdminRequestPayload {
  name: string;
  email: string;
  googleId: string;
}
