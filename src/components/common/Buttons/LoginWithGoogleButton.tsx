import { signIn } from 'next-auth/react';

import Button from './Button';

import { useSession } from 'next-auth/react';

const LoginWithGoogleButton = () => {
  const session = useSession();
  if (session.status === 'authenticated') return;
  return (
    <Button
      variant='PRIMARY'
      text='Continue With Google'
      onClick={() => {
        signIn('google');
      }}
    />
  );
};

export default LoginWithGoogleButton;
