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
  ExplorePlaylistContainer,
} from '@/components';
import { getPreFetchProps } from '@/utils';
import { useApi, useUser } from '@/hooks';
import { routes } from '@/constant';

const Home = ({ seoMeta }: PageProps) => {
  const { user } = useUser();
  const userId = user?.id;
  const router = useRouter();

  const [playlistUrl, setPlaylistUrl] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

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
      const response = await makeRequest({
        method: 'POST',
        url: `${routes.api.youfocusPlaylist}?userId=${userId}`,
        body: { playlistUrl },
      });

      if (response?.status && response.data?._id) {
        setSuccessMessage('Playlist added successfully! Redirecting...');
        setPlaylistUrl('');
        setTimeout(() => {
          router.push(`${routes.youfocusPlaylist}/${response.data._id}`);
        }, 2000);
      } else {
        setErrorMessage(response?.message || 'Failed to add playlist');
      }
    } catch (error) {
      setErrorMessage('Failed to add playlist. Please try again later.');
    }
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
            subtext='Learn Undistracted with YouTube Playlist'
          />
          <FlexContainer className='gap-3 w-full' direction='col'>
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
              active={!!playlistUrl}
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
        <ExplorePlaylistContainer
          heading='Don’t Have A'
          focusText='Playlist?'
          subtext='We’ll Recommend You, Don’t Worry'
        />
      </Section>
    </Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;
export default Home;
