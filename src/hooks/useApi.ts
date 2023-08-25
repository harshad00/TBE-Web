import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { sendRequest } from '@/utils';
import { APIMakeRquestProps, ApiHookResult } from '@/interfaces';

const useApi = (params?: APIMakeRquestProps): ApiHookResult => {
  const [data, setData] = useState<any>();
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

  useEffect(() => {
    const init = async () => {
      if (params) {
        await makeRequest(params);
      }
    };

    init();
  }, []);

  return {
    data: data?.data,
    loading,
    error,
    makeRequest,
  };
};

export default useApi;
