import { Link } from '@/components';
import { AccordionLinkItemProps } from '@/interfaces';
import { Disclosure } from '@headlessui/react';

const AccordionLinkItem = ({
  label,
  href,
  className,
  onClick,
}: AccordionLinkItemProps) => {
  return (
    <Link href={href} className='w-full'>
      <Disclosure.Panel
        onClick={onClick}
        className={`${className} p-2 rounded text-left pre-title text-greyDark hover:bg-gray-200 hover:text-primary`}
      >
        {label}
      </Disclosure.Panel>
    </Link>
  );
};

export default AccordionLinkItem;
