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
} from '@/components';
import { getPreFetchProps } from '@/utils';
import { useApi, useUser } from '@/hooks';
import { routes } from '@/constant';

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
      </Section>
    </Fragment>
  );
};
export const getServerSideProps = getPreFetchProps;
export default Home;
