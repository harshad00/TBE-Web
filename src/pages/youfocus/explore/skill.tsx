import React from 'react';
import { useRouter } from 'next/router';
import {
  FlexContainer,
  PlaylistSkillCard,
  SectionHeaderContainer,
} from '@/components';
import { useFetchPlaylistSkill } from '@/hooks';

const Explore = () => {
  const router = useRouter();
  const { q } = router.query;
  const skillQuery = typeof q === 'string' ? q : ''; // Ensure q is always a string
  const { playlists, loading, errorMessage } =
    useFetchPlaylistSkill(skillQuery);

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
      {errorMessage && (
        <p className='text-red-500 text-2xl mt-2 text-center'>{errorMessage}</p>
      )}

      <FlexContainer className='w-full gap-4 flex-wrap py-3'>
        {playlists.length > 0
          ? playlists.map((playlist) => (
              <PlaylistSkillCard key={playlist._id} {...playlist} />
            ))
          : !loading &&
            !errorMessage && (
              <p className='text-red-500 text-2xl mt-2 text-center'>
                No playlists found for this skill.
              </p>
            )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Explore;
