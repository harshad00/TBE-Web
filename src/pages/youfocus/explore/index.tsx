import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  FlexContainer,
  Button,
  Section,
  SectionHeaderContainer,
  Toast,
  RadioGroup,
} from '@/components';
import { YOUFOCUS_SKILL_PLAYLISTS, routes } from '@/constant';

const Home = () => {
  const router = useRouter();
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showSelection, setShowSelection] = useState(true);

  const handleSkillClick = (value: string) => {
    setSelectedSkill(value);
    setErrorMessage(null);
  };

  const handleExploreClick = () => {
    if (!selectedSkill) {
      setErrorMessage('Please select a skill before exploring.');
      return;
    }

    // Navigate to explore page with the selected skill as a query parameter
    router.push(
      `${routes.explorePlaylistSkill}?q=${encodeURIComponent(selectedSkill)}`
    );
  };

  return (
    <Section>
      <FlexContainer
        direction='col'
        className='w-full justify-center items-center'
      >
        <div className='w-full max-w-md'>
          <SectionHeaderContainer
            heading='Pick A '
            focusText='Skill'
            headingLevel={3}
            subtext='What Do You Want to Learn?'
          />
        </div>
      </FlexContainer>
      {showSelection && (
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
              className='w-full mx-auto'
              text='Explore Playlists'
              onClick={handleExploreClick}
              active={!!selectedSkill}
            />
          </div>
          {errorMessage && <Toast message={errorMessage} type='error' />}
        </FlexContainer>
      )}
    </Section>
  );
};

export default Home;
