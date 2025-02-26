import React, { useState } from 'react';
import { Button, FlexContainer } from '@/components';
import { PlaylistVideoCard, PlaylistCard } from '@/components';
import { PlaylistCantainerCardProps } from '@/interfaces';
import PlaylistVideoTimeCard from './Items/PlaylistVideoTimeCard';
import PlaylistRecommend from './Items/PlaylistRecommend';
import { useUser } from '@/hooks';
import { signIn } from 'next-auth/react';

const PlaylistContainerCard = ({
  id,
  playlistName,
  description,
  thumbnail,
  videos = [],
  learningTime = 0,
  isRecommended,
}: PlaylistCantainerCardProps) => {
  const [isPlaylistVideoVisible, setIsPlaylistVideoVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({
    videoId: videos?.[0]?.videoId || '',
    title: videos?.[0]?.title || '',
  });

  const { user, isAuth, loading } = useUser();
  const userId = user?.id;

  const togglePlaylistVideo = () => {
    if (loading) return;
    if (!isAuth) {
      signIn('google');
      return;
    }
    setIsPlaylistVideoVisible((prev) => !prev);
  };

  return (
    <div className='py-2'>
      <FlexContainer
        className='gap-3 border w-full md:border-grey gap-4 rounded-md md:p-2 p-1 items-start'
        itemCenter={false}
      >
        <FlexContainer className='flex-1 max-w-full gap-2 sticky top-2 z-10'>
          {isPlaylistVideoVisible && userId && (
            <div className='w-full flex justify-center'>
              <PlaylistVideoTimeCard
                usertime={learningTime}
                userId={userId}
                playlistId={id}
              />
            </div>
          )}

          <PlaylistCard
            title={playlistName || selectedVideo.title}
            description={description}
            thumbnail={thumbnail}
            videoId={selectedVideo.videoId}
            isPlaylistVideoVisible={isPlaylistVideoVisible}
          />

          {!isPlaylistVideoVisible && (
            <Button
              variant='PRIMARY'
              className='w-full mx-auto'
              text='Start Learning'
              onClick={togglePlaylistVideo}
            />
          )}
        </FlexContainer>
        <FlexContainer direction='col' className='flex-1 max-w-full gap-2'>
          {videos?.map(({ videoId, title, thumbnail }) => {
            const commonProps = {
              key: videoId,
              title: title,
              image: thumbnail,
              imageAltText: `${title} thumbnail | ${playlistName} | YouFocus`,
              href: videoId,
            };

            return isPlaylistVideoVisible ? (
              <PlaylistVideoCard
                {...commonProps}
                onClick={() =>
                  setSelectedVideo({
                    videoId: videoId,
                    title: title,
                  })
                }
              />
            ) : (
              <PlaylistVideoCard {...commonProps} />
            );
          })}
        </FlexContainer>
      </FlexContainer>

      {userId && (
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

export default PlaylistContainerCard;
