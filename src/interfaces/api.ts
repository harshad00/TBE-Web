import { CohortLeadStatus, CohortName } from '.';

export interface AddALeadRequestPayload {
  name: string;
  email: string;
  phone: string;
  cohortName: CohortName;
}

export interface UpdateALeadRequestPayload extends AddALeadRequestPayload {
  id: string;
  status: CohortLeadStatus;
}

export type UpdateALeadByIDFromDBType = Omit<UpdateALeadRequestPayload, 'id'>;

export interface AddAnAdminRequestPayload {
  name: string;
  email: string;
}

export type APIMethodTypes = 'GET' | 'POST' | 'PATCH';

export interface APIMakeRquestProps {
  method: APIMethodTypes;
  url: string;
  headers?: { [key: string]: string };
  body?: any;
}

export type ApiHookResult = {
  data: ClientAPIResponse | undefined;
  loading: boolean;
  error: any;
  makeRequest: (params: APIMakeRquestProps) => Promise<void>;
};

export interface ClientAPIResponse {
  status: boolean;
  data?: any;
}

export interface APIResponseType extends ClientAPIResponse {
  message?: string;
  error?: string;
}
