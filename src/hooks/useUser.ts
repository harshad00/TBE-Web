import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { User, UseUserReturnType } from '@/interfaces';

const useUser = (): UseUserReturnType => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isOnboarded, setIsOnboarded] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
      return;
    }

    setLoading(false);

    if (session?.user) {
      const { id = '', name, email, image, isOnboarded } = session.user as User;

      setUser({ id, name, email, image, isOnboarded });
      setIsAuth(true);
      setIsOnboarded(isOnboarded);
    } else {
      setUser(null);
      setIsAuth(false);
      setIsOnboarded(false);
    }
  }, [session, status]);

  return { user, isAuth, isOnboarded, loading };
};

export default useUser;
