import { LinkButtonProps } from '@/interfaces';

import { Button, Link } from '../..';

const LinkButton = ({
  href,
  className = '',
  buttonProps,
  target,
  active = true,
}: LinkButtonProps) => {
  return (
    <Link href={href} className={className} target={target} active={active}>
      <Button {...buttonProps} />
    </Link>
  );
};

export default LinkButton;
