import React from 'react';
import { Image, Text } from '@/components';
import { PlaylistVideoCardProps } from '@/interfaces';

const PlaylistVideoCard = ({
  title,
  image,
  imageAltText,
  content,
  href,
  onClick,
}: PlaylistVideoCardProps) => {
  return (
    <div className='flex border-gray-900 md:w-3/4 mb-1 hover:bg-slate-200 rounded-lg'>
      {href ? (
        <div onClick={onClick}>
          <div className='w-full flex flex-row'>
            <div className='flex-1 w-64 max-w-60 md:h-32 relative'>
              <Image
                src={image}
                alt={imageAltText}
                className='object-cover w-full h-auto rounded-md'
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
        </div>
      ) : (
        <div className='w-full flex flex-row'>
          <div className='flex-1 w-64 max-w-60 md:h-32 relative'>
            <Image
              src={image}
              alt={imageAltText}
              className='object-cover w-full h-auto rounded-md'
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
