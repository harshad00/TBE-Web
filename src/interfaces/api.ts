import { ProgramName } from '.';

export interface AddALeadRequestPayload {
  name: string;
  email: string;
  phone: string;
  programName: ProgramName;
}
