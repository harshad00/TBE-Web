import { localStorageKeys } from '@/constant';
import { AuthUserType, NextAuthUserType } from '@/interfaces';
import { getetUserFromLocalStorage, setUserInLocalStorage } from '@/utils';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const useUser = () => {
  const { data: session, status } = useSession();

  let isLoading, isUnauthenticated;

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

  if (status === 'loading') isLoading = true;
  if (status === 'unauthenticated') isUnauthenticated = true;

  const userData = getetUserFromLocalStorage(localStorageKeys.USER);

  return {
    user: userData?.user,
    type: userData?.type,
    isLoading,
    isUnauthenticated,
  };
};

export default useUser;
