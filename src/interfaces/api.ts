export type APIMethodTypes = 'GET' | 'POST' | 'PATCH';

export interface APIMakeRquestProps {
  method?: APIMethodTypes;
  url: string;
  headers?: { [key: string]: string };
  body?: any;
}

export interface ClientAPIResponseProps {
  status: boolean;
  data?: any;
}

export interface APIResponseProps extends ClientAPIResponseProps {
  message?: string;
  error?: any;
}

export interface ApiHookResultProps {
  data: any | undefined;
  isSuccess: boolean;
  loading: boolean;
  error: any;
  makeRequest: (params: APIMakeRquestProps) => Promise<void>;
}

export interface ClientAPIResponse {
  status: boolean;
  data?: any;
}

export interface APIResponseType extends ClientAPIResponse {
  message?: string;
  error?: any;
}

export type DatabaseQueryResponseType = {
  data?: any;
  error?: any;
};

export interface AddProjectRequestPayloadProps {
  name: string;
  meta: string;
}

export interface UpdateProjectRequestPayloadProps
  extends AddProjectRequestPayloadProps {
  id: string;
}
