import React from 'react';
import { Image, Text, FlexContainer } from '@/components';
import { PlaylistCardProps } from '@/interfaces';

const PlaylistCard = ({
  title,
  description,
  thumbnail,
  playlistVideo,
  videoId,
}: PlaylistCardProps) => {
  return (
    <FlexContainer direction='col' className='gap-4 w-full'>
      <div className='w-full border-1 border-black rounded-md overflow-hidden'>
        {!playlistVideo ? (
          <Image src={thumbnail} alt={title} />
        ) : (
          <iframe
            className='w-full aspect-video rounded-sm'
            src={`https://www.youtube.com/embed/${videoId}`}
            title='YouTube Video'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        )}
      </div>
      <FlexContainer direction='col' className='gap-1 items-baseline'>
        <Text level='h3' className='heading-3 font-bold'>
          {title}
        </Text>
        <Text level='p' className='line-clamp-2 text-grey'>
          {description}
        </Text>
      </FlexContainer>
    </FlexContainer>
  );
};

export default PlaylistCard;
