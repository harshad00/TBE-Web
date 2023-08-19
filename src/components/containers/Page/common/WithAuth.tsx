// utils/withAuth.tsx

import { routes } from '@/constant';
import { useUser } from '@/hooks';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface WithAuthProps {
  children: ReactNode;
}

const WithAuth = ({ children }: any) => {
  //   const { data: session, status } = useSession();
  const router = useRouter();

  const { user, isLoading, isUnauthenticated } = useUser();

  if (isLoading) return;
  //   if (user) router.replace(routes.admin.dashboard);

  // If not authenticated, redirect to the login page
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!user || isUnauthenticated) {
    router.replace(routes.admin.base);
    return null;
  }

  return <>{children(user)}</>;
};

export default WithAuth;
