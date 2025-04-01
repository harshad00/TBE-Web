import { useRouter } from 'next/router';
import { Button } from '@/components';
import { LoginRedirectButtonProps } from '@/interfaces';

const LoginRedirectButton = ({
  text = 'Login to Start',
  className = '',
}: LoginRedirectButtonProps) => {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push(`/login?redirect=${encodeURIComponent(router.asPath)}`);
  };

  return (
    <Button
      variant='PRIMARY'
      text={text}
      onClick={handleLoginRedirect}
      className={className}
    />
  );
};

export default LoginRedirectButton;
