// utils/withAuth.tsx

import { useUser } from '@/hooks';
import { UserTypeConfig } from '@/interfaces';

import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface WithAuthProps {
  children: ReactNode;
}

const withAuth = (WrappedComponent: any, config: UserTypeConfig) => {
  const Wrapper = (props: any) => {
    const router = useRouter();

    const { user, isLoading, isUnauthenticated } = useUser({
      userType: config.userType,
    });

    console.log('HERE', user);

    if (isLoading) return;
    if (isUnauthenticated && config.loginUrl) router.replace(config.loginUrl);

    if (user && config.redirectTo) router.replace(config.redirectTo);

    return <WrappedComponent {...props} user={user} />;
  };

  return Wrapper;
};

export default withAuth;
