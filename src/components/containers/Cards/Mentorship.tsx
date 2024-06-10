import { FlexContainer, LinkButton } from '@/components';
import React from 'react';

const Mentorship = ({
  heading,
  description,
  link,
}: {
  heading: string;
  description: string;
  link: string;
}) => {
  return (
    <FlexContainer
      justifyCenter={false}
      className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow'
    >
      <a href='#'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight'>{heading}</h5>
      </a>
      <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
        {description}
      </p>

      <LinkButton
        href={link}
        className='mt-3 block'
        buttonProps={{
          variant: 'PRIMARY',
          text: 'Book Session',
        }}
      />
    </FlexContainer>
  );
};

export default Mentorship;
