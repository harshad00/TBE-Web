import { Fragment, useState } from 'react';
import { PageProps } from '@/interfaces';
import { useRouter } from 'next/router';
import {
  Button,
  FlexContainer,
  Section,
  SectionHeaderContainer,
  SEO,
  InputFieldContainer,
  Toast,
  RadioGroup,
} from '@/components';
import { getPreFetchProps } from '@/utils';
import { useApi, useUser } from '@/hooks';
import { routes, Skills } from '@/constant';

const Home = ({ seoMeta }: PageProps) => {
  const { user } = useUser();
  const userId = user?.id;
  const router = useRouter();

  // TODO: Remove this -> https://www.youtube.com/watch?v=ohIAiuHMKMI&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo
  const [playlistUrl, setPlaylistUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (value: string) => {
    setPlaylistUrl(value);
    setErrorMessage(null);
  };

  const { makeRequest, loading } = useApi('youfocus-add-playlist');

  const handleAddPlaylist = async () => {
    if (!playlistUrl) {
      setErrorMessage('Playlist link is required');
      return;
    }

    try {
      const { status, data, message } = await makeRequest({
        method: 'POST',
        url: `${routes.api.youfocusPlaylist}?userId=${userId}`,
        body: { playlistUrl },
      });

      if (status) {
        setSuccessMessage('Playlist added successfully! Redirecting...');
        setPlaylistUrl('');
        setTimeout(() => {
          const playlistId = data._id;
          const redirectUrl = `${routes.youfocusPlaylist}/${playlistId}`;
          router.push(redirectUrl);
        }, 2000);
      } else {
        setErrorMessage(message || 'Failed to add playlist');
      }
    } catch (error) {
      setErrorMessage('Failed to add playlist. Please try again later.');
    }
  };

  const handleExploreClick = () => {
    router.push(routes.explorePlaylist);
  };

  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const handleSkillClick = (value: string) => {
    setSelectedSkill(value);
  };

  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      <Section>
        <FlexContainer direction='col' className='md:gap-6 gap-4'>
          <SectionHeaderContainer
            heading='Add Your'
            focusText='Playlist'
            headingLevel={2}
            subtext='Learn Undistracted with Youtube Playlist'
          />
          <FlexContainer className='gap-3 w-full ' direction='col'>
            <InputFieldContainer
              label='Paste YouTube Playlist Link'
              type='text'
              onChange={handleInputChange}
              className='md:w-1/2 md:px-5 text-black'
              value={playlistUrl}
            />

            <Button
              variant='PRIMARY'
              className='m-auto'
              text='Add Playlist'
              active={!!playlistUrl || !!errorMessage}
              isLoading={loading}
              onClick={handleAddPlaylist}
            />
            {errorMessage && <Toast message={errorMessage} type='error' />}
            {successMessage && (
              <Toast message={successMessage} type='success' />
            )}
          </FlexContainer>
        </FlexContainer>

        {/* Skill Selection Section */}
        <FlexContainer
          direction='col'
          className='w-full py-11 mt-12 justify-center items-center'
        >
          <div className='w-full max-w-md'>
            <SectionHeaderContainer
              heading='Don’t Have A '
              focusText=' Playlist?'
              headingLevel={3}
              subtext='We’ll Recommend You, Don’t Worry'
            />
          </div>
          {/* Skill Selection Buttons */}
          <FlexContainer className='flex-wrap justify-center gap-1 md:gap-2 mx-auto max-w-lg py-5'>
            <RadioGroup
              options={Skills}
              selectedValue={selectedSkill}
              onChange={handleSkillClick}
            />
          </FlexContainer>
          {/* Explore Button */}
          <div className='w-full max-w-md'>
            <Button
              variant='PRIMARY'
              className='w-full mx-auto'
              text='Explore Playlists'
              onClick={handleExploreClick}
            />
          </div>
        </FlexContainer>
      </Section>
    </Fragment>
  );
};
export const getServerSideProps = getPreFetchProps;
export default Home;
