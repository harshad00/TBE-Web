import { FlexContainer, Text } from '@/components';
import { IN_DEV_PAGES } from '@/constant';
import { AlertProps } from '@/interfaces';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Alert = ({ text, className }: AlertProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const path = usePathname();
  useEffect(() => {
    for (const page of IN_DEV_PAGES) if (path === page) setIsOpen(true);
  }, [path]);

  return (
    <FlexContainer
      className={`w-full justify-between items-center py-2 px-1 bg-black ${className} ${
        !isOpen ? 'hidden' : ''
      }`}
    >
      <Text level='p' className='text-white'>
        {text}
      </Text>
      <button
        className='text-white'
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(false);
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-3'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18 18 6M6 6l12 12'
          />
        </svg>
      </button>
    </FlexContainer>
  );
};

export default Alert;
