import React from 'react';
import { Image, Text } from '@/components';
import { PlaylistVideoCardProps } from '@/interfaces';

const PlaylistVideoCard = ({
  title,
  image,
  imageAltText,
  href,
  onClick,
}: PlaylistVideoCardProps) => {
  return (
    <div className='flex mt-4 border-gray-900 md:w-[65%] mb-1 hover:bg-slate-200 rounded-lg'>
      {href ? (
        <div onClick={onClick} className='w-full flex flex-row'>
          <div className='w-32 h-20 md:w-40 md:h-28 flex-shrink-0 relative'>
            <Image
              src={image}
              alt={imageAltText}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
          <div className='flex-1 p-2'>
            <Text
              level='h6'
              className='heading-5 font-primary text-[1rem] md:text-[1.1rem] line-clamp-2'
            >
              {title}
            </Text>
          </div>
        </div>
      ) : (
        <div className='w-full flex flex-row'>
          <div className='w-32 h-20 md:w-40 md:h-28 flex-shrink-0 relative'>
            <Image
              src={image}
              alt={imageAltText}
              className='object-cover w-full h-full rounded-md'
            />
          </div>
          <div className='flex-1 p-2'>
            <Text
              level='h6'
              className='heading-5 font-primary text-[1rem] md:text-[1.1rem] line-clamp-2'
            >
              {title}
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaylistVideoCard;
