import React, { useState } from 'react';
import { Button } from '@/components';
import { useSession } from 'next-auth/react';
import { Section, PlaylistVideoCard, PlaylistCard } from '@/components';
import { CardContainerCProps } from '@/interfaces';
import PlaylistVideoTimeCard from './Items/PlaylistVideoTimeCard';
import PlaylistRecommend from './Items/PlaylistRecommend';

const CardContainerC = ({ playlist }: CardContainerCProps) => {
  const [playlistVideo, setPlaylistVideo] = useState(false);
  const { data: session, status } = useSession();

  const togglePlaylistVideo = () => {
    if (status === 'loading') return; // Prevent toggling while session is loading
    if (!session) {
      alert('You need to log in to start learning!');
      return;
    }
    setPlaylistVideo((prev) => !prev);
  };

  return (
    <Section className='py-2 md:px-0'>
      <div className='flex flex-col gap-6 max-w-full md:max-w-[90%] mx-auto'>
        {playlistVideo && (
          <div className='w-full flex justify-center'>
            <PlaylistVideoTimeCard usertime={0} />
          </div>
        )}

        <div className='w-full'>
          <PlaylistCard
            title={playlist.playlistName}
            description={playlist.description}
            thumbnail={playlist.thumbnail}
            videoId={playlist.videos?.[0]?.videoId}
            playlistVideo={playlistVideo}
          />
        </div>

        {!playlistVideo && (
          <div className='w-full max-w-[25rem] py-2 m-auto'>
            <Button
              variant='PRIMARY'
              className='="bg-red-500 sm:w-[25rem] text-nowrap text-white px-4 py-1 md:py-2 rounded-lg shadow-md hover:bg-red-600"'
              text='Start Learning'
              onClick={togglePlaylistVideo}
            />
          </div>
        )}

        {playlist.videos?.map((video) => (
          <PlaylistVideoCard
            key={video.title}
            title={video.title}
            image={video.thumbnail}
            imageAltText={video.title}
            href={playlistVideo ? video.videoId : undefined}
            onClick={() => console.log(`Clicked on ${video.title}`)}
          />
        ))}
      </div>

      {playlistVideo && (
        <div className='w-full flex justify-center'>
          <PlaylistRecommend />
        </div>
      )}
    </Section>
  );
};

export default CardContainerC;
