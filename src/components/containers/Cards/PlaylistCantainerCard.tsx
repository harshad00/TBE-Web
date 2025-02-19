import React, { useState } from 'react';
import { Button } from '@/components';
import { useSession } from 'next-auth/react';
import { PlaylistVideoCard, PlaylistCard } from '@/components';
import { CardContainerCProps } from '@/interfaces';
import PlaylistVideoTimeCard from './Items/PlaylistVideoTimeCard';
import PlaylistRecommend from './Items/PlaylistRecommend';

const CardContainerC = ({ playlist }: CardContainerCProps) => {
  const [playlistVideo, setPlaylistVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({
    videoId: playlist.videos?.[0]?.videoId ?? undefined,
    title: playlist.videos?.[0]?.title ?? '',
  });
  const { data: session, status } = useSession();

  const togglePlaylistVideo = () => {
    if (status === 'loading') return;
    if (!session) {
      alert('You need to log in to start learning!');
      return;
    }
    setPlaylistVideo((prev) => !prev);
  };

  return (
    <div className='py-2'>
      <div className='gap-6 md:w-[70%] mx-auto md:border-2 md:border-black md:rounded-md md:p-2'>
        {playlistVideo && (
          <div className='w-full flex justify-center'>
            <PlaylistVideoTimeCard usertime={0} />
          </div>
        )}
        <div className='w-full m-auto'>
          <PlaylistCard
            title={selectedVideo.title || playlist.playlistName}
            description={playlist.description}
            thumbnail={playlist.thumbnail}
            videoId={selectedVideo.videoId}
            playlistVideo={playlistVideo}
          />
        </div>

        {!playlistVideo && (
          <div className='w-full max-w-[25rem] py-2 m-auto'>
            <Button
              variant='PRIMARY'
              className='w-full'
              text='Start Learning'
              onClick={togglePlaylistVideo}
            />
          </div>
        )}
        <div className='flex flex-col md:items-center'>
          {playlistVideo
            ? playlist.videos?.map((video) => (
                <PlaylistVideoCard
                  key={video.title}
                  title={video.title}
                  image={video.thumbnail}
                  imageAltText={video.title}
                  href={video.videoId}
                  onClick={() =>
                    setSelectedVideo({
                      videoId: video.videoId,
                      title: video.title,
                    })
                  }
                />
              ))
            : playlist.videos?.map((video) => (
                <PlaylistVideoCard
                  key={video.title}
                  title={video.title}
                  image={video.thumbnail}
                  imageAltText={video.title}
                />
              ))}
        </div>
      </div>

      {playlistVideo && (
        <div className='w-full flex justify-center'>
          <PlaylistRecommend />
        </div>
      )}
    </div>
  );
};

export default CardContainerC;
