import React, { useState } from 'react';
import { Button } from '@/components';
import { useSession } from 'next-auth/react';
import { PlaylistVideoCard, PlaylistCard } from '@/components';
import { CardContainerCProps } from '@/interfaces';
import PlaylistVideoTimeCard from './Items/PlaylistVideoTimeCard';
import PlaylistRecommend from './Items/PlaylistRecommend';
import { useRouter } from 'next/router';

const CardContainerC = ({ playlist }: CardContainerCProps) => {
  const playlistdata = playlist.playlistId;
  const [playlistVideo, setPlaylistVideo] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({
    videoId: playlistdata.videos?.[0]?.videoId ?? undefined,
    title: playlistdata.videos?.[0]?.title ?? '',
  });
  console.log(playlist);

  const [login, setLogin] = useState('');
  const router = useRouter();
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const togglePlaylistVideo = () => {
    if (status === 'loading') return;
    if (!session) {
      setLogin('You need to login to start learning');
      return;
    }
    setPlaylistVideo((prev) => !prev);
  };

  return (
    <div className='py-2'>
      <div className='gap-6 md:w-[70%] mx-auto md:border-2 md:border-black md:rounded-md md:p-2'>
        {playlistVideo && (
          <div className='w-full flex justify-center'>
            <PlaylistVideoTimeCard
              usertime={playlist.learningTime}
              userId={userId}
              playlistId={playlistdata._id}
            />
          </div>
        )}
        <div className='w-full m-auto'>
          <PlaylistCard
            title={selectedVideo.title || playlist.playlistName}
            description={playlistdata.description || playlist.description}
            thumbnail={playlistdata.thumbnail || playlist.thumbnail}
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
        {login ? <div className='text-red-500 text-center'>{login}</div> : null}

        <div className='flex flex-col md:items-center'>
          {playlistVideo
            ? playlistdata.videos?.map((video) => (
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
            : (playlistdata ?? playlist).videos?.map((video) => (
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
          <PlaylistRecommend
            userId={userId}
            playlistId={playlistdata._id}
            recommend={playlist.isRecommended}
          />
        </div>
      )}
    </div>
  );
};

export default CardContainerC;
