import React from 'react';
import { Image, Text, Button, FlexContainer } from '@/components';

// Define an interface for the component props
interface UserPlaylistCardProps {
  imageSrc: string;
  title: string;
  recommended: boolean;
  learningTime: string;
}

const UserPlaylistCard = ({
  imageSrc,
  title,
  recommended,
  learningTime,
}: {
  UserPlaylistCardProps;
}) => {
  return (
    // Main container using FlexContainer for a column layout with spacing and styling
    <FlexContainer
      direction='col'
      className='gap-2 bg-white shadow-lg rounded-xl p-4 w-80 items-center'
    >
      {/* Display the playlist image with rounded corners for aesthetics */}
      <Image src={imageSrc} alt={title} className='rounded-lg' />

      {/* Display the playlist title using an h2-level Text component for emphasis */}
      <Text level='h2' className='font-bold text-lg'>
        {title}
      </Text>

      {/* Display the recommended status only if true */}
      {recommended && (
        <Text level='h3' variant='SUCCESS' className='text-sm'>
          Recommended
        </Text>
      )}

      {/* Show the estimated learning time using an 'ERROR' variant to make it noticeable */}
      <Text level='h3' variant='ERROR' className='text-sm'>
        Learning Time: {learningTime}
      </Text>

      {/* A primary button to navigate or start learning the playlist */}
      <Button variant='PRIMARY' text='Learn Playlist' className='mt-2 w-full' />
    </FlexContainer>
  );
};

export default UserPlaylistCard;
