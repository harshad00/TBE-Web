import { localStorageKeys } from '@/constant';
import { AuthUserType, NextAuthUserType } from '@/interfaces';
import {
  getUserFromLocalStorage,
  removeLocalStorageItem,
  setUserInLocalStorage,
} from '@/utils';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const useUser = () => {
  const { data: session, status } = useSession();
  // console.log('HERE', session);

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
    } else {
      removeLocalStorageItem(localStorageKeys.USER);
    }
  }, [session]);

  const userData = getUserFromLocalStorage(localStorageKeys.USER);

  return {
    user: userData?.user,
    type: userData?.type,
    isLoading: status === 'loading',
    isUnauthenticated: !userData,
  };
};

export default useUser;
