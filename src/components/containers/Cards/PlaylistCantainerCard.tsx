import React, { useState } from 'react';
import { Button, FlexContainer } from '@/components';
import { PlaylistVideoCard, PlaylistCard } from '@/components';
import { PlaylistCantainerCardProps } from '@/interfaces';
import PlaylistVideoTimeCard from './Items/PlaylistVideoTimeCard';
import PlaylistRecommend from './Items/PlaylistRecommend';
<<<<<<< HEAD
import { useRouter } from 'next/router';
=======
import { useUser } from '@/hooks';
import { signIn } from 'next-auth/react';
>>>>>>> 500b3e3e9271558cbbc133cfac9af7609c4aa015

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
  console.log(playlist);

<<<<<<< HEAD
  const [login, setLogin] = useState('');
  const router = useRouter();
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const togglePlaylistVideo = () => {
    if (status === 'loading') return;
    if (!session) {
      setLogin('You need to login to start learning');
      return;
=======
  const { user, isAuth, loading } = useUser();
  const userId = user?.id;

  const togglePlaylistVideo = () => {
    if (loading) return;
    if (!isAuth) {
      signIn('google');
>>>>>>> 500b3e3e9271558cbbc133cfac9af7609c4aa015
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
<<<<<<< HEAD
        <div className='w-full m-auto'>
          <PlaylistCard
            title={selectedVideo.title || playlist.playlistName}
            description={playlistdata.description || playlist.description}
            thumbnail={playlistdata.thumbnail || playlist.thumbnail}
            videoId={selectedVideo.videoId}
            playlistVideo={playlistVideo}
          />
        </div>
=======

        <PlaylistCard
          title={selectedVideo.title || playlistName}
          description={description}
          thumbnail={thumbnail}
          videoId={selectedVideo.videoId}
          playlistVideo={playlistVideo}
        />
>>>>>>> 500b3e3e9271558cbbc133cfac9af7609c4aa015

        {!playlistVideo && (
          <Button
            variant='PRIMARY'
            className='w-full'
            text='Start Learning'
            onClick={togglePlaylistVideo}
          />
        )}
<<<<<<< HEAD
        {login ? <div className='text-red-500 text-center'>{login}</div> : null}

        <div className='flex flex-col md:items-center'>
=======
        <FlexContainer direction='col' className='gap-2 px-6'>
>>>>>>> 500b3e3e9271558cbbc133cfac9af7609c4aa015
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
