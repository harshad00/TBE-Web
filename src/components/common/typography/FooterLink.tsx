import { Link } from '@/components';
import { FooterLinkProps } from '@/interfaces';

const FooterLink = ({ href, label, target }: FooterLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className='paragraph text-grey hover:underline'
        target={target}
      >
        {label}
      </Link>
    </li>
  );
};

export default FooterLink;
