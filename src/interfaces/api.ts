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
}

export type APIMethodTypes = 'GET' | 'POST';

export type ApiHookResult = {
  data: any;
  loading: boolean;
  error: any;
  makeRequest: (
    method: APIMethodTypes,
    url: string,
    headers?: { [key: string]: string },
    body?: any
  ) => Promise<void>;
};

export type APIResponseType = {
  status: boolean;
  data?: any;
  message?: string;
  error?: string;
};
