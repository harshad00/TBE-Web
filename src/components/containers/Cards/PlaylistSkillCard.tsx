import React from 'react';
import { Button, FlexContainer, Image, Text } from '@/components';
import { useRouter } from 'next/router';
import { routes } from '@/constant';
import { PlaylistSkillCardProps } from '@/interfaces';

const PlaylistSkillCard = ({ playlist }: PlaylistSkillCardProps) => {
  const router = useRouter();

  return (
    <FlexContainer
      direction='col'
      className='bg-white shadow-md rounded-md  py-4 px-2 border border-gray-200 w-full md:w-96'
    >
      {/* Thumbnail Image */}
      <Image
        src={playlist.thumbnail}
        alt={playlist.playlistName}
        className='w-full h-44 object-cover rounded-lg'
      />

      {/* Title & Recommendation Count */}
      <FlexContainer direction='col' className='mt-3 w-full items-baseline '>
        <Text level='h5' className='heading-5 font-bold text-gray-900'>
          {playlist.playlistName}
        </Text>
        <Text level='h6' className='heading-6 font-medium text-red-500 mt-1'>
          {playlist.referrerBy || '0'} Learners Recommended
        </Text>
      </FlexContainer>

      {/* View Playlist Button */}
      <Button
        variant='PRIMARY'
        className='mt-4 w-full bg-red-500 text-nowrap text-white font-semibold py-2 rounded-lg hover:bg-red-600'
        text='View Playlist'
        onClick={() =>
          router.push(`${routes.youfocusPlaylist}/${playlist._id}`)
        }
      />
    </FlexContainer>
  );
};

export default PlaylistSkillCard;
