import { useEffect, useState } from 'react';
import { useApi, useUser } from '@/hooks';
import { routes } from '@/constant';
import { userLevels } from '@/constant';

const useGamification = () => {
  const { makeRequest } = useApi(`useGamification`);
  const { user } = useUser();
  const [points, setPoints] = useState<number | null>(null);
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

        setPoints(response?.data?.data?.points || 0); // Ensure default value is 0
      } catch (error) {
        console.error('Error updating gamification progress:', error);
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.id]);

  // Function to get current user level and points required for the next level
  const getUserLevel = (userPoints: number) => {
    let currentLevel = 'Noob';
    let nextLevel = null;
    let pointsNeeded = 0;

    const levels = Object.entries(userLevels);

    for (let i = 0; i < levels.length; i++) {
      const [level, requiredPoints] = levels[i];

      if (userPoints >= requiredPoints) {
        currentLevel = level;
      } else {
        nextLevel = level;
        pointsNeeded = requiredPoints - userPoints;
        break;
      }
    }

    return { currentLevel, nextLevel, pointsNeeded };
  };

  const userLevelData = points !== null ? getUserLevel(points) : null;

  return { points, loading, error, userLevelData };
};

export default useGamification;
