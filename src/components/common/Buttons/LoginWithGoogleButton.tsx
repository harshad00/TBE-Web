import { signIn } from 'next-auth/react';

import Button from './Button';

import { useSession } from 'next-auth/react';
import { LoginWithGoogleBtnProps } from '@/interfaces';

const LoginWithGoogleButton = ({ text }: LoginWithGoogleBtnProps) => {
  const session = useSession();
  if (session.status === 'authenticated') return;
  return (
    <Button
      variant='PRIMARY'
      text={text}
      onClick={() => {
        signIn('google');
      }}
    />
  );
};

export default LoginWithGoogleButton;
