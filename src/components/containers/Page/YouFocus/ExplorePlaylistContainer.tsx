import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  FlexContainer,
  Button,
  Section,
  SectionHeaderContainer,
  RadioGroup,
} from '@/components';
import { ExploreCantainerCardProps } from '@/interfaces';
import { YOUFOCUS_SKILL_PLAYLISTS, routes } from '@/constant';

const ExplorePlaylistContainer = ({
  heading,
  focusText,
  subtext,
}: ExploreCantainerCardProps) => {
  const router = useRouter();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

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
    <Section>
      <FlexContainer
        direction='col'
        className='w-full mt-3 justify-center items-center'
      >
        <div className='w-full max-w-md'>
          <SectionHeaderContainer
            heading={heading}
            focusText={focusText}
            headingLevel={3}
            subtext={subtext}
          />
        </div>
      </FlexContainer>
      <FlexContainer
        direction='col'
        className='w-full justify-center items-center'
      >
        <FlexContainer className='flex-wrap justify-center gap-1 md:gap-2 mx-auto max-w-lg py-5'>
          <RadioGroup
            options={YOUFOCUS_SKILL_PLAYLISTS}
            selectedValue={selectedSkill}
            onChange={handleSkillClick}
          />
        </FlexContainer>
        <div className='w-full max-w-md'>
          <Button
            variant='PRIMARY'
            className='mx-auto'
            text='Explore Playlists'
            onClick={handleExploreClick}
            active={!!selectedSkill}
          />
        </div>
      </FlexContainer>
    </Section>
  );
};

export default ExplorePlaylistContainer;
