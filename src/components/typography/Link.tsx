import Link from 'next/link';

import { LinkProps } from '@/interfaces';

const LinkText = ({ href, children, className }: LinkProps) => {
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
};

export default LinkText;