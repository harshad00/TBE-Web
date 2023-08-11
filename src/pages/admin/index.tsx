import { Button } from '@/components';
import { useSession, signIn, signOut } from 'next-auth/react';

const Admin = () => {
  const { data: session } = useSession();
  console.log('HERE', session);

  const handleGoogleAuth = () => {
    signIn('google');
  };

  return (
    <div>
      <button></button>
      <Button variant='PRIMARY' text='Get Started' onClick={handleGoogleAuth} />
    </div>
  );
};

export default Admin;
