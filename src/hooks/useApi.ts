import { useQuery, useQueryClient } from 'react-query';
import { APIMakeRquestProps, APIResponseType } from '@/interfaces';
import { sendRequest } from '@/utils';

const useApi = (
  queryKey: string,
  initialParams: APIMakeRquestProps,
  options = { enabled: true }
) => {
  const queryClient = useQueryClient();

  // Define the fetch function once
  const fetchFunction = async (params: APIMakeRquestProps) => {
    try {
      const response = await sendRequest(params);
      return response;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const { data, isLoading, error } = useQuery<APIResponseType>(
    [queryKey, initialParams], // Key includes params for caching purposes
    () => fetchFunction(initialParams),
    {
      enabled: options.enabled,
    }
  );

  // Custom function to refetch with optional new params
  const makeRequest = (overrideParams?: APIMakeRquestProps) => {
    const params = overrideParams ? overrideParams : initialParams;
    return queryClient.fetchQuery([queryKey, params], () =>
      fetchFunction(params)
    );
  };

  return {
    response: data,
    isSuccess: !!data,
    error,
    loading: isLoading,
    makeRequest,
  };
};

export default useApi;
