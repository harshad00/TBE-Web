import React from 'react';
import { Image, Text, FlexContainer } from '@/components';
import { PlaylistCardProps } from '@/interfaces';

const PlaylistCard = ({
  title,
  description,
  thumbnail,
  playlistVideo,
  videoId,
  selectedVideoId,
}: PlaylistCardProps) => {
  return (
    <>
      <FlexContainer direction='col' className='relative gap-4 mt-4'>
        <div className='w-full md:w-[65%] border-1 border-black rounded-md overflow-hidden'>
          {!playlistVideo ? (
            <Image className='w-full' src={thumbnail} alt={title} />
          ) : (
            <iframe
              className='w-full aspect-video rounded-sm'
              src={`https://www.youtube.com/embed/${
                selectedVideoId ?? videoId ?? ''
              }`}
              title='YouTube Video'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          )}
        </div>
      </FlexContainer>
      <FlexContainer direction='col' className='relative py-3'>
        <div className='w-full md:w-[65%]'>
          <Text level='h3' className='heading-4 font-bold py-1'>
            {title}
          </Text>
          <Text level='p' className='line-clamp-2 '>
            {description}
          </Text>
        </div>
      </FlexContainer>
    </>
  );
};

export default PlaylistCard;
