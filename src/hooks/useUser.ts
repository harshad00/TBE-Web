import { localStorageKeys } from '@/constant';
import { NextAuthUserType, UseUserProps } from '@/interfaces';
import {
  getUserFromLocalStorage,
  removeLocalStorageItem,
  setUserInLocalStorage,
} from '@/utils';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const useUser = ({ userType }: UseUserProps) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      const { user } = session;
      setUserInLocalStorage(
        localStorageKeys.USER,
        user as NextAuthUserType,
        userType
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
