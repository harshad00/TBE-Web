// hooks/useUsernameAvailability.ts
import { useEffect, useState } from 'react';
import useApi from './useApi';
import { APIMakeRquestProps } from '@/interfaces';
import { routes } from '@/constant';

const useUsernameAvailability = (username: string) => {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  const {
    response,
    loading: isChecking,
    error,
    makeRequest,
  } = useApi('check-username', undefined, { enabled: false });

  useEffect(() => {
    if (!username || username.length <= 2) {
      setIsAvailable(null);
      return;
    }

    const timer = setTimeout(() => {
      const params: APIMakeRquestProps = {
        url: `${routes.api.onboard}?userName=${username}`,
        method: 'GET',
      };
      makeRequest(params);
    }, 1000); // debounce: 3 seconds after typing

    return () => clearTimeout(timer);
  }, [username]);

  useEffect(() => {
    if (!response) return;

    if (response.status === true && response.data) {
      setIsAvailable(false); // username taken
    } else {
      setIsAvailable(true); // username available
    }
  }, [response]);

  return { isAvailable, isChecking, error };
};

export default useUsernameAvailability;
