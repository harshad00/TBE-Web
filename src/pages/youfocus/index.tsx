import { PageProps } from '@/interfaces';
import { CardContainerA, LandingPageHero, LinkButton, SEO } from '@/components';
import { getPreFetchProps } from '@/utils';
import { routes, STATIC_FILE_PATH, YOUFOCUS_FEATURES } from '@/constant';
import { Fragment } from 'react';

const Home = ({ seoMeta }: PageProps) => {
  return (
    <Fragment>
      <SEO seoMeta={seoMeta} />
      <LandingPageHero
        sectionHeaderProps={{
          heading: 'Always Distracted While Learning?',
          focusText: '',
        }}
        heroText='Master Skills, Minus the Distractions'
        primaryButton={
          <LinkButton
            href={routes.youfocusAddPlaylist}
            className='w-full sm:w-fit'
            buttonProps={{
              variant: 'PRIMARY',
              text: 'Add Playlist',
              className: 'w-full',
            }}
          />
        }
        secondaryButton={
          <LinkButton
            href={routes.explorePlaylist}
            className='w-full sm:w-fit'
            buttonProps={{
              variant: 'OUTLINE',
              text: 'Explore',
              className: 'w-full',
            }}
          />
        }
        backgroundImageUrl={`${STATIC_FILE_PATH.svg}/youfocus.svg`}
      />
      <CardContainerA
        heading='What We Do'
        focusText='Differently?'
        cards={YOUFOCUS_FEATURES}
        borderColour={4}
      />
    </Fragment>
  );
};
export const getServerSideProps = getPreFetchProps;
export default Home;
