import { localStorageKeys } from '@/constant';
import { NextAuthUserType, UseUserProps } from '@/interfaces';
import {
  getUserFromLocalStorage,
  removeLocalStorageItem,
  setUserInLocalStorage,
} from '@/utils';
import { useEffect } from 'react';

const useUser = ({ userType }: UseUserProps) => {
  const userData = getUserFromLocalStorage(localStorageKeys.USER);

  useEffect(() => {
    const checkAuth = async () => {
      // if (session && userType) {
      //   const { user } = session;
      //   setUserInLocalStorage(
      //     localStorageKeys.USER,
      //     user as NextAuthUserType,
      //     userType
      //   );
      // } else {
      //   removeLocalStorageItem(localStorageKeys.USER);
      // }
      removeLocalStorageItem(localStorageKeys.USER);
    };

    if (!userData) checkAuth();
  }, []);

  return {
    user: userData?.user,
    type: userData?.type,
    isLoading: true,
    isUnauthenticated: !userData,
  };
};

export default useUser;
