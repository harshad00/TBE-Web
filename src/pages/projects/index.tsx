import React from 'react';
import {
  LandingPageHero,
  WeGuideDifferently,
  SEO,
  LinkButton,
} from '@/components';
import { PageProps } from '@/interfaces';
import { getPreFetchProps } from '@/utils';
import { STATIC_FILE_PATH } from '@/constant';

const Home = ({ seoMeta }: PageProps) => {
  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <LandingPageHero
        sectionHeaderProps={{
          heading: 'Build Projects',
          focusText: 'without Tutorials',
        }}
        heroText='Come Out of Tutorial Hell & Enhance Your Resume with Real Life Projects.'
        primaryButton={
          <LinkButton
            href='/get-started'
            className='w-full sm:w-fit'
            buttonProps={{
              variant: 'PRIMARY',
              text: 'Explore Projects',
              className: '',
            }}
          />
        }
        backgroundImageUrl={`${STATIC_FILE_PATH.svg}/tbp-hero.svg`}
      />
      <WeGuideDifferently />
    </React.Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Home;
