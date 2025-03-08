import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  FlexContainer,
  Button,
  SectionHeaderContainer,
  RadioButtonContainer,
} from '@/components';
import { ExploreCantainerCardProps } from '@/interfaces';
import { YOUFOCUS_SKILL_PLAYLISTS, routes } from '@/constant';

const ExplorePlaylistContainer = ({
  heading,
  focusText,
  subtext,
}: ExploreCantainerCardProps) => {
  const router = useRouter();
  const [selectedSkill, setSelectedSkill] = useState<string>('');

  const handleSkillClick = (value: string) => {
    setSelectedSkill(value);
  };

  const handleExploreClick = () => {
    if (selectedSkill) {
      router.push(
        `${routes.explorePlaylistSkill}?q=${encodeURIComponent(selectedSkill)}`
      );
    }
  };

  return (
    <FlexContainer className='' direction='col'>
      <SectionHeaderContainer
        heading={heading}
        focusText={focusText}
        headingLevel={4}
        subtext={subtext}
      />
      <FlexContainer direction='col' className='justify-center items-center'>
        <FlexContainer className='flex-wrap justify-center gap-1 mx-auto max-w-lg py-5'>
          <RadioButtonContainer
            options={YOUFOCUS_SKILL_PLAYLISTS}
            selectedValue={selectedSkill}
            onChange={handleSkillClick}
          />
        </FlexContainer>
        <div className='max-w-md'>
          <Button
            variant='PRIMARY'
            className='mx-auto'
            text='Explore Playlists'
            onClick={handleExploreClick}
            active={!!selectedSkill}
          />
        </div>
      </FlexContainer>
    </FlexContainer>
  );
};

export default ExplorePlaylistContainer;
