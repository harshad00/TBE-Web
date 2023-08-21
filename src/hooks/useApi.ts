import { useState } from 'react';
import { AxiosResponse } from 'axios';
import { sendRequest } from '@/utils';
import { APIResponseType, ApiHookResult } from '@/interfaces';

const useApi = (): ApiHookResult => {
  const [data, setData] = useState<APIResponseType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const makeRequest = async (
    method: string,
    url: string,
    headers?: { [key: string]: string },
    body?: any
  ): Promise<void> => {
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
