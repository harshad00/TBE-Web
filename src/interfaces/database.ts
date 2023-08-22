import { CohortLeadStatus, CohortName } from './global';
import { AddALeadRequestPayload, AddAnAdminRequestPayload } from './api';

export interface CohortLead extends AddALeadRequestPayload {
  name: string;
  email: string;
  phone: string;
  cohortName: CohortName;
}

export interface CohortLeadDocumentModel extends CohortLead {
  status: CohortLeadStatus;
}

export interface AdminUserDocumentModel extends AddAnAdminRequestPayload {
  name: string;
  email: string;
  googleId: string;
}
