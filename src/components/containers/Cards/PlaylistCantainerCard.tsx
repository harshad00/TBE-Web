import React, { useState } from 'react';
import { Button, FlexContainer } from '@/components';
import { PlaylistVideoCard, PlaylistCard } from '@/components';
import { PlaylistCantainerCardProps } from '@/interfaces';
import PlaylistVideoTimeCard from './Items/PlaylistVideoTimeCard';
import PlaylistRecommend from './Items/PlaylistRecommend';
import { useUser } from '@/hooks';
import { signIn } from 'next-auth/react';

const PlaylistCantainerCard = ({
  id,
  playlistName,
  description,
  thumbnail,
  videos,
  learningTime,
  isRecommended,
}: PlaylistCantainerCardProps) => {
  const [playlistVideo, setPlaylistVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({
    videoId: videos?.[0]?.videoId ?? undefined,
    title: videos?.[0]?.title ?? '',
  });

  const { user, isAuth, loading } = useUser();
  const userId = user?.id;

  const togglePlaylistVideo = () => {
    if (loading) return;
    if (!isAuth) {
      signIn('google');
    }
    setPlaylistVideo((prev) => !prev);
  };

  return (
    <div className='py-2'>
      <FlexContainer
        direction='col'
        className='gap-3 md:w-1/2 mx-auto border md:border-grey rounded-md md:p-2'
      >
        {playlistVideo && userId && (
          <div className='w-full flex justify-center'>
            <PlaylistVideoTimeCard
              usertime={learningTime ?? 0}
              userId={userId}
              playlistId={id}
            />
          </div>
        )}

        <PlaylistCard
          title={selectedVideo.title || playlistName}
          description={description}
          thumbnail={thumbnail}
          videoId={selectedVideo.videoId}
          playlistVideo={playlistVideo}
        />

        {!playlistVideo && (
          <Button
            variant='PRIMARY'
            className='w-full'
            text='Start Learning'
            onClick={togglePlaylistVideo}
          />
        )}
        <FlexContainer direction='col' className='gap-2 px-6'>
          {playlistVideo
            ? videos?.map((video) => (
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
            : videos?.map((video) => (
                <PlaylistVideoCard
                  key={video.title}
                  title={video.title}
                  image={video.thumbnail}
                  imageAltText={video.title}
                />
              ))}
        </FlexContainer>
      </FlexContainer>

      {playlistVideo && userId && isRecommended && (
        <div className='w-full flex justify-center'>
          <PlaylistRecommend
            userId={userId}
            playlistId={id}
            recommend={isRecommended}
          />
        </div>
      )}
    </div>
  );
};

export default PlaylistCantainerCard;
