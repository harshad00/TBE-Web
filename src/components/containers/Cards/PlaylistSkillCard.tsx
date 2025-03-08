import React from 'react';
import { GradientContainer, Image, Text, LinkButton } from '@/components';
import { routes } from '@/constant';
import { PlaylistSkillCardProps } from '@/interfaces';

const SkillCard = ({
  thumbnail,
  playlistName,
  referrerBy,
  _id,
}: PlaylistSkillCardProps) => {
  return (
    <GradientContainer className='max-w-sm border border-gray-200 shadow-md rounded-md'>
      <Image
        src={thumbnail}
        alt={playlistName}
        className='w-full object-cover rounded-md'
      />

      <Text level='h5' className='heading-5 font-bold text-gray-900 mt-3'>
        {playlistName}
      </Text>

      {referrerBy > 0 && (
        <Text level='h6' className='heading-6 font-medium text-red-500 mt-1'>
          {referrerBy} Learners Recommended
        </Text>
      )}

      <LinkButton
        href={`${routes.youfocus}/${_id}`}
        className='w-full mt-3 block'
        buttonProps={{
          variant: 'PRIMARY',
          text: 'Explore Skill',
          active: true,
          className: `w-full`,
        }}
      />
    </GradientContainer>
  );
};

export default SkillCard;
