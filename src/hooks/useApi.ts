import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { sendRequest } from '@/utils';
import { APIMakeRquestProps, APIResponseType } from '@/interfaces';

const useApi = (params?: APIMakeRquestProps) => {
  if (!params) {
    throw new Error('Params are required for useApi hook');
  }

  const { data, isLoading, error, refetch } = useQuery<APIResponseType>(
    ['apiRequest', params],
    async () => {
      try {
        const response = await sendRequest(params);
        return response;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    { enabled: !!params }
  );

  useEffect(() => {
    if (params) {
      refetch();
    }
  }, [params, refetch]);

  return {
    data,
    isSuccess: !!data,
    error,
    loading: isLoading,
    makeRequest: refetch,
  };
};

export default useApi;
