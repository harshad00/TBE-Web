import { useQuery, useQueryClient } from 'react-query';
import { APIMakeRquestProps, APIResponseType } from '@/interfaces';
import { sendRequest } from '@/utils';

const useApi = (
  queryKey: string,
  initialParams?: APIMakeRquestProps, // Make initialParams optional
  options = { enabled: !!initialParams } // Enable query only if initialParams are provided
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
    () => fetchFunction(initialParams!), // Non-null assertion because it won't be undefined if enabled is true
    {
      enabled: options.enabled,
    }
  );

  // Custom function to refetch with optional new params
  const makeRequest = (overrideParams?: APIMakeRquestProps) => {
    const params = overrideParams || initialParams;
    if (!params) {
      throw new Error('Params are required to make a request.');
    }

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
