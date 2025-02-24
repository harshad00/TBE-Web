import { PlaylistPageProps } from '@/interfaces';
import { SEO, PlaylistCantainerCard, Section } from '@/components';
import { getPlaylistPageProps } from '@/utils';
import { Fragment } from 'react';

const PlaylistPage = ({ playlist, seoMeta }: PlaylistPageProps) => {
  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      <Section className='p-2'>
        <PlaylistCantainerCard {...playlist} id={playlist._id} />
      </Section>
    </Fragment>
  );
};

export const getServerSideProps = getPlaylistPageProps;
export default PlaylistPage;
