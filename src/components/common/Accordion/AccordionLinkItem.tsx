import { Link } from '@/components';
import { AccordionLinkItemProps } from '@/interfaces';
import { Disclosure } from '@headlessui/react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { FaRegCircle } from 'react-icons/fa';

const AccordionLinkItem = ({
  label,
  href,
  className,
  isCompleted,
  onClick,
}: AccordionLinkItemProps) => {
  const iconColor = isCompleted ? 'text-green-500' : 'text-greyDark';

  return (
    <Link href={href} className='w-full'>
      <Disclosure.Panel
        onClick={onClick}
        className={`${className} flex items-center gap-1 p-2 rounded text-left pre-title text-greyDark hover:bg-gray-200 hover:text-primary`}
      >
        <div className='flex-shrink-0'>
          {isCompleted ? (
            <IoIosCheckmarkCircle size={24} className={iconColor} />
          ) : (
            <FaRegCircle size={24} className={iconColor} />
          )}
        </div>
        {label}
      </Disclosure.Panel>
    </Link>
  );
};

export default AccordionLinkItem;
