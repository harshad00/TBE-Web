import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { LoginCard } from '@/components';

const Login = () => {
  const { status } = useSession();
  const router = useRouter();
  const redirectPath = router.query.redirect ? String(router.query.redirect) : '/';

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace(redirectPath);
    }
  }, [status, router, redirectPath]);

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100 p-4'>
      <LoginCard />
    </div>
  );
};

export default Login;
