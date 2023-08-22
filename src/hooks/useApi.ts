import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { sendRequest } from '@/utils';
import {
  APIMakeRquestProps,
  ClientAPIResponse,
  ApiHookResult,
} from '@/interfaces';

const useApi = (): ApiHookResult => {
  const [data, setData] = useState<ClientAPIResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const makeRequest = async ({
    method,
    url,
    headers,
    body,
  }: APIMakeRquestProps): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const response: AxiosResponse = await sendRequest(
        method,
        url,
        headers,
        body
      );

      setData(response.data);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    makeRequest,
  };
};

export default useApi;
