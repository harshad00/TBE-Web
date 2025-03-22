import { useEffect, useState } from 'react';
import useApi from '@/hooks/useApi';
import { routes } from '@/constant';

export const useUserPoint = (userId: string) => {
  const { response, loading, error, makeRequest } = useApi(
    'userPoints',
    userId
      ? {
          url: `${routes.api.gamification}?userId=${userId}`,
          method: 'GET',
        }
      : undefined,
    { enabled: false } // Disable auto-fetching to avoid unnecessary re-fetches
  );

  const [userPoint, setUserPoint] = useState<number>(0);

  useEffect(() => {
    if (userId) {
      makeRequest();
    }
  }, [userId]);

  useEffect(() => {
    if (response?.data?.data?.points !== undefined) {
      setUserPoint(response.data.data.points); // Update state only when valid data is received
    } else {
      console.error('Invalid response structure:', response); // Log invalid response
    }
  }, []);

  return {
    userPoint,
    loading,
    error,
    refetch: makeRequest,
  };
};
