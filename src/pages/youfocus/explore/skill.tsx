import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import {
  FlexContainer,
  PlaylistSkillCard,
  Section,
  SectionHeaderContainer,
  SEO,
  Toast,
} from '@/components';
import { useSkillPlaylist } from '@/hooks';
import { getSkillPlaylistPageProps } from '@/utils';
import { PageProps } from '@/interfaces';

const Explore = ({ seoMeta }: PageProps) => {
  const router = useRouter();
  const { q } = router.query;
  const skillQuery = typeof q === 'string' ? q : ''; // Ensure q is always a string
  const { playlists, loading, errorMessage } = useSkillPlaylist(skillQuery);

  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      <Section>
        <FlexContainer
          direction='col'
          className='w-full justify-center items-center'
        >
          <div className='w-full max-w-md'>
            <SectionHeaderContainer
              heading={`${
                skillQuery
                  ? skillQuery.charAt(0).toUpperCase() + skillQuery.slice(1)
                  : 'Explore'
              }`}
              focusText='Playlist'
              headingLevel={3}
              subtext='Pick A Playlist and Start Learning'
            />
          </div>

          {loading && <Toast type='error' message='Playlists Loading...' />}
          {errorMessage && <Toast type='error' message={errorMessage} />}

          <FlexContainer className='w-full gap-4 py-3'>
            {playlists.length > 0 &&
              playlists.map((playlist, key) => {
                const { _id, name, thumbnail, referrerBy } = playlist;

                return (
                  <PlaylistSkillCard
                    key={key}
                    _id={_id}
                    playlistName={name}
                    thumbnail={thumbnail}
                    referrerBy={referrerBy}
                  />
                );
              })}
          </FlexContainer>
        </FlexContainer>
      </Section>
    </Fragment>
  );
};

export const getServerSideProps = getSkillPlaylistPageProps;
export default Explore;
