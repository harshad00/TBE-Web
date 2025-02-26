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
        direction='col'
        className='gap-3 md:w-1/2 mx-auto  border md:border-grey rounded-md md:p-2'
      >
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

        <FlexContainer direction='col' className='gap-2 '>
          {isPlaylistVideoVisible
            ? videos?.map((video) => (
                <PlaylistVideoCard
                  key={video.videoId}
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
                  key={video.videoId}
                  title={video.title}
                  image={video.thumbnail}
                  imageAltText={video.title}
                  href={video.videoId}
                />
              ))}
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
