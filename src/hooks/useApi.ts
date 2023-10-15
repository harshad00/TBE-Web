import { useEffect, useState } from 'react';
import { sendRequest } from '@/utils';
import {
  APIMakeRquestProps,
  APIResponseType,
  ApiHookResult,
} from '@/interfaces';

const useApi = (params?: APIMakeRquestProps): ApiHookResult => {
  const [data, setData] = useState<APIResponseType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<APIResponseType | string | null>();

  const makeRequest = async ({
    method,
    url,
    headers,
    body,
  }: APIMakeRquestProps): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const response: APIResponseType = await sendRequest({
        method,
        url,
        headers,
        body,
      });

      if (response.status) setData(response as APIResponseType);
      else setError(response.message);
    } catch (err: any) {
      setError(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      if (params) {
        try {
          await makeRequest(params);
        } catch (error: any) {
          setError(error?.message);
        }
      }
    };

    init();
  }, [params]);

  return {
    data,
    isSuccess: !!data,
    error,
    loading,
    makeRequest,
  };
};

export default useApi;
