import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { LoginCard } from '@/components';
import { useUser } from '@/hooks';

const Login = () => {
  const { user, isAuth, loading } = useUser();
  const router = useRouter();

  const redirectPath = router.query.redirect
    ? String(router.query.redirect)
    : '/';

  useEffect(() => {
    if (!loading && isAuth) {
      if (!user?.isOnboarded) {
        router.replace('/onboard');
      } else {
        router.replace(redirectPath);
      }
    }
  }, [loading, isAuth, user, router, redirectPath]);

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100 p-4'>
      <LoginCard />
    </div>
  );
};

export default Login;
