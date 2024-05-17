import { signOut } from 'next-auth/react';
import Button from './Button';
import { useSession } from 'next-auth/react';
const LogoutButton = () => {
  const session = useSession();
  if (session.status === 'unauthenticated') return;
  return (
    <Button
      variant='GHOST'
      text='Log out'
      className='w-fit'
      onClick={() => {
        signOut();
      }}
    />
  );
};

export default LogoutButton;
