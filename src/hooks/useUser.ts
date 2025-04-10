import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { User, UseUserReturnType } from '@/interfaces';

const useUser = (): UseUserReturnType => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState<boolean | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
      return;
    }

    setLoading(false);

    if (session?.user) {
      const sessionUser = session.user as User;
      const onboarded = sessionUser.isOnboarded ?? false;
      setUser({
        id: sessionUser.id || '',
        name: sessionUser.name,
        email: sessionUser.email,
        image: sessionUser.image,
        isOnboarded: onboarded,
      });
      setIsAuth(true);
      setIsOnboarded(onboarded);
    } else {
      setUser(null);
      setIsAuth(false);
      setIsOnboarded(undefined);
    }
  }, [session, status]);

  return { user, isAuth, isOnboarded, loading };
};

export default useUser;
