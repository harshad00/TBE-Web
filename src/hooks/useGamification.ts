import { useEffect, useState } from 'react';
import { useApi, useUser } from '@/hooks';
import { routes } from '@/constant';
import { getUserLevel } from '@/utils';

const useGamification = () => {
  const { makeRequest } = useApi('useGamification');
  const { user } = useUser();
  const [points, setPoints] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const userId = user?.id;
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await makeRequest({
          method: 'GET',
          url: `${routes.api.gamification}?userId=${userId}`,
          headers: { 'Content-Type': 'application/json' },
        });

        setPoints(response?.data?.data?.points);
      } catch (error) {
        console.error('Error updating gamification progress:', error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.id]);

  console.log(points);

  // Call the updated utility function
  const userLevelData = getUserLevel(points);

  return { points, loading, error, userLevelData };
};

export default useGamification;
