import { useQuery } from 'react-query';
import { APIMakeRquestProps, APIResponseType } from '@/interfaces';

const useApi = (
  queryKey: string,
  fetchFunction: (params: APIMakeRquestProps) => Promise<APIResponseType>,
  params?: APIMakeRquestProps
) => {
  if (!params) {
    throw new Error('Params are required for useApi hook');
  }

  const { data, isLoading, error, refetch } = useQuery<APIResponseType>(
    [queryKey],
    async () => {
      try {
        const response = await fetchFunction(params);
        return response;
      } catch (error: any) {
        throw new Error(error.message);
      }
    },
    { enabled: !!params }
  );

  return {
    response: data,
    isSuccess: !!data,
    error,
    loading: isLoading,
    makeRequest: refetch,
  };
};

export default useApi;
