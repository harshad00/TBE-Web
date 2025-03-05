import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  FlexContainer,
  Button,
  Section,
  SectionHeaderContainer,
  RadioGroup,
  PlaylistSkillCard,
} from '@/components';
import { Skills, routes } from '@/constant';
import { useApi } from '@/hooks';

const Home = () => {
  const router = useRouter();
  const { makeRequest, loading } = useApi('fetchPlaylists');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [playlists, setPlaylists] = useState([]);
  const [showSelection, setShowSelection] = useState(true);

  const handleSkillClick = (value: string) => {
    setSelectedSkill(value);
    setErrorMessage(null);
  };

  const handleExploreClick = async () => {
    if (!selectedSkill) {
      setErrorMessage('Please select a skill before exploring.');
      return;
    }

    try {
      setErrorMessage(null);
      setShowSelection(false);

      router.push(
        `${routes.explorePlaylist}?q=${encodeURIComponent(selectedSkill)}`
      );

      const response = await makeRequest({
        method: 'GET',
        url: `${routes.api.youfocusExplore}?q=${encodeURIComponent(
          selectedSkill
        )}`,
      });

      if (!response.data || response.data.length === 0) {
        setErrorMessage('No playlists found for this skill.');
        setPlaylists([]);
      } else {
        setPlaylists(response.data);
      }
    } catch (error) {
      setErrorMessage('Failed to fetch playlists. Please try again.');
      setPlaylists([]);
    }
  };

  return (
    <Section>
      <FlexContainer
        direction='col'
        className='w-full justify-center items-center'
      >
        <div className='w-full max-w-md'>
          {showSelection ? (
            <SectionHeaderContainer
              heading='Pick A '
              focusText='Skill'
              headingLevel={3}
              subtext='What Do You Want to Learn?'
            />
          ) : (
            <SectionHeaderContainer
              heading={
                selectedSkill
                  ? selectedSkill.charAt(0).toUpperCase() +
                    selectedSkill.slice(1)
                  : 'Explore'
              }
              focusText='Playlists'
              headingLevel={3}
              subtext='Here are the playlists based on your selected skill.'
            />
          )}
        </div>
      </FlexContainer>
      {showSelection && (
        <FlexContainer
          direction='col'
          className='w-full justify-center items-center'
        >
          <FlexContainer className='flex-wrap justify-center gap-1 md:gap-2 mx-auto max-w-lg py-5'>
            <RadioGroup
              options={Skills}
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
            />
          </div>
        </FlexContainer>
      )}

      {loading && <p className='text-blue-500 mt-4'>⏳ Loading playlists...</p>}

      {!showSelection &&
        (playlists.length > 0 ? (
          <FlexContainer className='w-full gap-4 flex-wrap py-3 '>
            {playlists.map((playlist) => (
              <PlaylistSkillCard key={playlist._id} playlist={playlist} />
            ))}
          </FlexContainer>
        ) : (
          <p className='text-red-500 text-sm mt-2 text-center'>
            No playlists found for this skill.
          </p>
        ))}
    </Section>
  );
};

export default Home;
