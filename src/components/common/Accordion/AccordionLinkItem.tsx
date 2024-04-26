import { Link } from '@/components';
import { AccordionLinkItemProps } from '@/interfaces';
import { Disclosure } from '@headlessui/react';

const AccordionLinkItem = ({
  label,
  href,
  className,
}: AccordionLinkItemProps) => {
  return (
    <Link href={href} className='w-full'>
      <Disclosure.Panel
        className={`${className} p-2 rounded pre-title text-greyDark hover:bg-gray-200`}
      >
        {label}
      </Disclosure.Panel>
    </Link>
  );
};

export default AccordionLinkItem;
