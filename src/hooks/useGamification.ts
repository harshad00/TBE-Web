import { useEffect, useState } from 'react';
import { useApi, useUser } from '@/hooks';
import { routes } from '@/constant';

const useGamification = () => {
  const { makeRequest } = useApi(`useGamification`);
  const { user } = useUser();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

        setData(response?.data?.data?.points); // Ensure `data` is always an object
      } catch (error) {
        console.error('Error updating gamification progress:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.id]); // Add dependencies to re-run when `user.id` or `makeRequest` changes

  return { data, loading, error };
};

export default useGamification;
