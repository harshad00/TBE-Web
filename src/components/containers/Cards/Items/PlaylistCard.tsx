import React from 'react';
import { Image, Text, LinkButton } from '@/components';

import { PlaylistCardProps } from '@/interfaces';

const PlaylistCard = ({
  title,
  description,
  thumbnail,
  route,
}: PlaylistCardProps) => {
  return (
    <div>
      <div className='flex flex-col items-center w-full'>
        <div className='w-full py-2 transition-transform duration-300 hover:scale-105'>
          <Image
            className='w-full h-auto md:h-[20rem] lg:h-[25rem] rounded-lg object-cover shadow-lg'
            src={thumbnail}
            alt={title}
          />
        </div>
      </div>

      <div className='w-full mx-auto py-2  '>
        <Text
          level='label'
          className='heading-4 font-bold text-lg md:text-xl lg:text-2xl'
        >
          {title}
        </Text>
        <Text
          level='p'
          className='paragraph mt-1 pt-1 text-sm md:text-base lg:text-lg line-clamp-2'
        >
          {description}
        </Text>
      </div>
      <div>
        <div className='w-full max-w-[25rem] py-2 m-auto'>
          <LinkButton
            href={route || ''}
            className='w-full sm:w-fit'
            buttonProps={{
              variant: 'PRIMARY',
              text: 'Start Learning',
              className: 'w-full ',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
