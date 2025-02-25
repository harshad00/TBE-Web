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
  playlistData,
  playlistName,
  description,
  thumbnail,
  videos = [],
  learningTime = 0,
  isRecommended,
}: PlaylistCantainerCardProps) => {
  const [playlistVideo, setPlaylistVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({
    videoId: playlistData?.videos?.[0]?.videoId || '',
    title: playlistData?.videos?.[0]?.title || '',
  });

  const videoList = videos?.length ? videos : playlistData?.videos ?? [];

  const { user, isAuth, loading } = useUser();
  const userId = user?.id;

  const togglePlaylistVideo = () => {
    if (loading) return;
    if (!isAuth) {
      signIn('google');
      return;
    }
    setPlaylistVideo((prev) => !prev);
  };

  return (
    <div className='py-2'>
      <FlexContainer
        direction='col'
        className='gap-3 md:w-1/2 mx-auto  border md:border-grey rounded-md md:p-2'
      >
        {playlistVideo && userId && (
          <div className='w-full flex justify-center'>
            <PlaylistVideoTimeCard
              usertime={learningTime}
              userId={userId}
              playlistId={id}
            />
          </div>
        )}

        <PlaylistCard
          title={selectedVideo.title || playlistData?.playlistName}
          description={description || playlistData?.description}
          thumbnail={thumbnail || playlistData?.thumbnail}
          videoId={selectedVideo.videoId}
          playlistVideo={playlistVideo}
        />

        {!playlistVideo && (
          <Button
            variant='PRIMARY'
            className='w-full mx-auto'
            text='Start Learning'
            onClick={togglePlaylistVideo}
          />
        )}

        <FlexContainer direction='col' className='gap-2 '>
          {playlistVideo
            ? playlistData.videos?.map((video) => (
                <PlaylistVideoCard
                  key={video.videoId || playlistData?.playlistName}
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
            : videoList.map((video) => (
                <PlaylistVideoCard
                  key={video.videoId || playlistData?.playlistName}
                  title={video.title}
                  image={video.thumbnail}
                  imageAltText={video.title}
                  href={video.videoId}
                />
              ))}
        </FlexContainer>
      </FlexContainer>

      {playlistVideo && userId && (
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
