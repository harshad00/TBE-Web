import React from 'react';
import {
  LandingPageHero,
  CardContainerA,
  CanYouBeAProgrammer,
  Testimonials,
  SEO,
  LinkButton,
  CardContainerB,
  FlexContainer,
  Image,
  Text,
} from '@/components';
import { PageProps } from '@/interfaces';
import { getPreFetchProps } from '@/utils';
import {
  COMMUNITY_SECTION,
  LINKS,
  PRODUCTS,
  STATIC_FILE_PATH,
  USP,
  generateSectionPath,
  routes,
} from '@/constant';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Home = ({ seoMeta }: PageProps) => {
  const router = useRouter();

  return (
    <React.Fragment>
      <SEO seoMeta={seoMeta} />
      <LandingPageHero
        sectionHeaderProps={{
          heading: 'Tech Education for',
          focusText: 'Everyone',
        }}
        heroText='Learn Tech Skills & Prepare yourself for a Tech Job.'
        primaryButton={
          <LinkButton
            href={generateSectionPath({
              basePath: router.basePath,
              sectionID: routes.internals.landing.products,
            })}
            className='w-full sm:w-fit'
            buttonProps={{
              variant: 'PRIMARY',
              text: 'Get Started',
              className: '',
            }}
          />
        }
        secondaryButton={
          <LinkButton
            href={LINKS.freeTechConsultation}
            className='w-full sm:w-fit'
            buttonProps={{
              variant: 'OUTLINE',
              text: 'Book Free Session',
              className: '',
            }}
            target='BLANK'
          />
        }
        backgroundImageUrl={`${STATIC_FILE_PATH.svg}/hero-image.svg`}
      />

      <CardContainerB
        id={routes.internals.landing.products}
        heading='Our'
        focusText='Products'
        cards={PRODUCTS}
        borderColour={2}
      />
      <CanYouBeAProgrammer />
      <FlexContainer className='bg-[#923CFF] w-full p-4 flex-col  gap-4'>
        <FlexContainer className='w-full lg:w-[45%] max-w-[350px] md:max-w-[500px]'>
          <Image
            src={COMMUNITY_SECTION.communityBannerImage}
            fullHeight={true}
            fullWidth={true}
            alt='community'
          />
        </FlexContainer>
        <FlexContainer className='max-w-[350px] text-white gap-1  md:max-w-[500px]'>
          <Text level='h1' className='font-bold text-2xl'>
            {COMMUNITY_SECTION.communityTitleLine}
          </Text>
          <Text level='p' className='text-center'>
            {COMMUNITY_SECTION.communityDescriptionLine}
          </Text>
        </FlexContainer>
        <FlexContainer className='max-w-[350px] flex-col text-white gap-1  md:max-w-[500px]'>
          <Text level='h1' className='font-bold text-2xl'>
            In Community, You can
          </Text>
          <FlexContainer className='flex-col gap-3 '>
            {COMMUNITY_SECTION.goalOfCommunity.map((goal, i) => (
              <Text
                level='h1'
                key={i}
                className='w-full bg-white text-black rounded-[5px] text-center px-5 py-2 font-bold'
              >
                {goal}
              </Text>
            ))}
            <Link
              href={LINKS.whatsappCommunity}
              className='bg-[#FFA751] w-full text-black rounded-[5px] text-center px-5 py-2 font-bold'
              target='block'
            >
              Join Community
            </Link>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <CardContainerA
        heading='What We Do'
        focusText='Differently'
        cards={USP}
      />
      <Testimonials />
    </React.Fragment>
  );
};

export const getServerSideProps = getPreFetchProps;

export default Home;
