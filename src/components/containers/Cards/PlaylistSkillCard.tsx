import React from 'react';
import { FlexContainer, Image, Text, LinkButton } from '@/components';
import { useRouter } from 'next/router';
import { routes } from '@/constant';
import { PlaylistSkillCardProps } from '@/interfaces';

const PlaylistSkillCard = ({
  thumbnail,
  playlistName,
  referrerBy,
  _id,
}: PlaylistSkillCardProps) => {
  const router = useRouter();
  const active = true; // Change this based on your logic
  const ctaText = 'View Playlist'; // Define CTA text
  const target = '_self'; // Adjust if needed

  return (
    <FlexContainer
      direction='col'
      className='bg-white shadow-md rounded-md py-4 px-2 border border-gray-200 w-full md:w-96'
    >
      {/* Thumbnail Image */}
      <Image
        src={thumbnail}
        alt={playlistName}
        className='w-full h-44 object-cover rounded-lg'
      />

      {/* Title & Recommendation Count */}
      <FlexContainer direction='col' className='mt-3 w-full items-baseline'>
        <Text level='h5' className='heading-5 font-bold text-gray-900'>
          {playlistName}
        </Text>
        <Text level='h6' className='heading-6 font-medium text-red-500 mt-1'>
          {referrerBy || '0'} Learners Recommended
        </Text>
      </FlexContainer>

      {/* View Playlist Button */}
      <LinkButton
        href={`${routes.youfocusPlaylist}/${_id}`}
        className='w-full mt-3 block'
        buttonProps={{
          variant: 'PRIMARY',
          text: active ? ctaText : 'Coming soon',
          active,
          className: `${!active ? 'bg-secondary' : ''} w-full`,
        }}
        active={active}
      />
    </FlexContainer>
  );
};

export default PlaylistSkillCard;
