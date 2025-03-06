import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  FlexContainer,
  PlaylistSkillCard,
  SectionHeaderContainer,
} from '@/components';
import { useApi } from '@/hooks';
import { routes } from '@/constant';
import { Playlist } from '@/interfaces';

const Explore = () => {
  const router = useRouter();
  const { q } = router.query; // Get the skill from the query parameter
  const { makeRequest, loading } = useApi('fetchPlaylists');
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      if (!q || typeof q !== 'string') return; // Ensure q is a string before using it

      try {
        const response = await makeRequest({
          method: 'GET',
          url: `${routes.api.youfocusExplore}?q=${encodeURIComponent(q)}`,
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

    fetchPlaylists();
  }, [q]);

  return (
    <FlexContainer
      direction='col'
      className='w-full justify-center items-center'
    >
      <div className='w-full max-w-md'>
        <SectionHeaderContainer
          heading={`${q ? q.charAt(0).toUpperCase() + q.slice(1) : 'Explore'}`}
          focusText='Playlist'
          headingLevel={3}
          subtext='Pick A Playlist and Start Learning'
        />
      </div>
      {loading && <p className='text-blue-500'>⏳ Loading playlists...</p>}

      <FlexContainer className='w-full gap-4 flex-wrap py-3'>
        {playlists.length > 0 ? (
          playlists.map((playlist) => (
            <PlaylistSkillCard key={playlist._id} {...playlist} />
          ))
        ) : (
          <p className='text-red-500 text-2xl mt-2 text-center'>
            No playlists found for this skill.
          </p>
        )}
      </FlexContainer>
    </FlexContainer>
  );
};

export default Explore;
