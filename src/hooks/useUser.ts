import { User, UseUserReturnType } from '@/interfaces';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

const useUser = (): UseUserReturnType => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User>(session?.user as User);
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') {
      setLoading(true);
    } else {
      setLoading(false);
    }

    if (session?.user) {
      setUser(session?.user as User);
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [session, status]);

  return { user, isAuth, loading };
};

export default useUser;
