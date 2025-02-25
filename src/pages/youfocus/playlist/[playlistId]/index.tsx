import { PlaylistPageProps } from '@/interfaces';
import { SEO, PlaylistContainerCard, Section } from '@/components';
import { getPlaylistPageProps } from '@/utils';
import { Fragment } from 'react';

const PlaylistPage = ({ playlist, seoMeta }: PlaylistPageProps) => {
  console.log(playlist);

  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      <Section className='p-2'>
        <PlaylistContainerCard {...playlist} id={playlist._id} />
      </Section>
    </Fragment>
  );
};

export const getServerSideProps = getPlaylistPageProps;
export default PlaylistPage;
