import { Fragment } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PageProps, PrimaryCardWithCTAProps } from '@/interfaces';
import {
  CardContainerB,
  LoadingSpinner,
  FlexContainer,
  Text,
  LinkButton,
  SEO,
} from '@/components';
import { useAPIResponseMapper, useApi, useUser } from '@/hooks';
import { getAllUserPlaylist, mapUserPlaylistResponseToCard } from '@/utils';
import { routes } from '@/constant';

const MyPlaylist = ({ seoMeta }: PageProps) => {
  const session = useSession();
  const router = useRouter();

  const { user } = useUser();

  const userId = user?.id;

  const { response, loading } = useApi(
    'myPlaylist',
    {
      url: `${routes.api.myPlaylists}?userId=${userId}`,
    },
    { enabled: !!userId }
  );
  console.log(response);

  const playlists: PrimaryCardWithCTAProps[] = useAPIResponseMapper(
    response?.data,
    mapUserPlaylistResponseToCard
  );

  if (session.status === 'loading') return null;
  if (session.status !== 'authenticated') {
    router.push('/');
    return null;
  }

  if (loading) return <LoadingSpinner />;

  const noPlaylistFoundUI = (!playlists || playlists.length === 0) && (
    <FlexContainer className='w-screen h-screen flex-col justify-center items-center'>
      <Text level='h1' className='heading-4 mb-3'>
        Oops! No Playlists found.
      </Text>
      <LinkButton
        buttonProps={{ variant: 'PRIMARY', text: 'Go Back To Home' }}
        href={routes.youfocus}
      />
    </FlexContainer>
  );

  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      <CardContainerB
        heading='My'
        focusText='Playlists'
        cards={playlists}
        borderColour={2}
        subtext='Continue Learning From Where You Left'
        sectionClassName='px-2 py-4'
      />
      {noPlaylistFoundUI}
    </Fragment>
  );
};

export const getServerSideProps = getAllUserPlaylist;

export default MyPlaylist;
