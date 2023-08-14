import { localStorageKeys } from '@/constant';
import { AuthUserType, NextAuthUserType } from '@/interfaces';
import { getetUserFromLocalStorage, setUserInLocalStorage } from '@/utils';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const useUser = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      const { user } = session;
      // TODO: Remove Hardcoded value of ADMIN
      const type: AuthUserType = 'ADMIN';

      setUserInLocalStorage(
        localStorageKeys.USER,
        user as NextAuthUserType,
        type
      );
    }
  }, [session]);

  const userData = getetUserFromLocalStorage(localStorageKeys.USER);

  return {
    user: userData?.user,
    type: userData?.type,
    isLoading: status === 'loading',
    isUnauthenticated: status === 'unauthenticated',
  };
};

export default useUser;
