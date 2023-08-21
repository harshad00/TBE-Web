import { APIResponseType } from '@/interfaces';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const apiInstance = axios.create();

const sendRequest = async (
  method: string,
  url: string,
  headers?: { [key: string]: string },
  data?: any
): Promise<AxiosResponse> => {
  const config: AxiosRequestConfig = {
    method,
    url: `/api${url}`,
    headers,
    data,
  };

  return apiInstance.request(config);
};

const sendAPIResponse = ({ status, error, message, data }: APIResponseType) => {
  return { status, error, message, data };
};

export { sendRequest, sendAPIResponse };
