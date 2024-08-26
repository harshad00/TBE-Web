import Link from 'next/link';
import { LinkProps } from '@/interfaces';

const LinkText = ({
  href,
  children,
  className,
  target,
  active = true,
  scroll = false,
}: LinkProps) => {
  return (
    <Link
      className={`${className} link ${!active && 'disabled'}`}
      href={href}
      target={target}
      scroll={scroll}
    >
      {children}
    </Link>
  );
};

export default LinkText;
