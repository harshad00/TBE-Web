import React from 'react';
import { useRouter } from 'next/router';
import {
  FlexContainer,
  PlaylistSkillCard,
  SectionHeaderContainer,
  Toast,
} from '@/components';
import { useSkillPlaylist } from '@/hooks';

const Explore = () => {
  const router = useRouter();
  const { q } = router.query;
  const skillQuery = typeof q === 'string' ? q : ''; // Ensure q is always a string
  const { playlists, loading, errorMessage } = useSkillPlaylist(skillQuery);

  return (
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

      {loading && <p className='text-blue-500'>⏳ Loading playlists...</p>}
      {errorMessage && <Toast type='error' message={errorMessage} />}

      <FlexContainer className='w-full gap-4 flex-wrap py-3'>
        {playlists.length > 0
          ? playlists.map((playlist) => (
              <PlaylistSkillCard
                key={playlist._id}
                _id={playlist._id}
                playlistName={playlist.name}
                thumbnail={playlist.thumbnail}
                referrerBy={playlist.referrerBy || 0}
              />
            ))
          : !loading &&
            !errorMessage && (
              <Toast
                type='error'
                message='No playlists found for this skill.'
              />
            )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Explore;
