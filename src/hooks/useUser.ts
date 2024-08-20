import { User, UseUserReturnType } from '@/interfaces';
import { fetchUserData } from '@/utils';
import { useState, useEffect } from 'react';

const useUser = (): UseUserReturnType => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetchUser = async () => {
    setLoading(true);
    try {
      const userData = await fetchUserData();
      if (userData) {
        setUser(userData);
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    } catch (err) {
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refetchUser();
  }, []);

  return { user, isAuth, error, loading, refetchUser };
};

export default useUser;
