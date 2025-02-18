import { Section, PlaylistVideoCard, PlaylistCard } from '@/components';

import { CardContainerCProps } from '@/interfaces';

const CardContainerC = ({ playlist }: CardContainerCProps) => {
  return (
    <Section className='py-2 md:px-0'>
      <div className='flex flex-col gap-6 max-w-full md:max-w-[90%] mx-auto'>
        <div></div>
        <div className=' w-full'>
          <PlaylistCard
            title={playlist.playlistName}
            description={playlist.description}
            thumbnail={playlist.thumbnail}
            route=''
          />
        </div>

        {playlist.videos?.map((video) => (
          <PlaylistVideoCard
            key={video.title}
            title={video.title}
            image={video.thumbnail}
            imageAltText={video.title}
            content=''
          />
        ))}
      </div>
    </Section>
  );
};

export default CardContainerC;
