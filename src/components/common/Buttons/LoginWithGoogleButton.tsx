import { signIn } from 'next-auth/react';
import Button from './Button';
import { useSession } from 'next-auth/react';
import { LoginWithGoogleBtnProps } from '@/interfaces';

const LoginWithGoogleButton = ({ text = 'Login' }: LoginWithGoogleBtnProps) => {
  const session = useSession();
  if (session.status === 'authenticated' || session.status === 'loading')
    return;

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
