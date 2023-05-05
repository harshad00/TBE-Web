import { MouseEventHandler } from 'react';
import { PageSlug, SkillProps, SkillsProps } from '.';

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface LinkProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
  target?: 'BLANK';
  active?: boolean;
}

export interface TextProps {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
  className?: string;
  textCenter?: boolean;
}

export interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fullHeight?: boolean;
  fullWidth?: boolean;
}

export interface LogoProps {
  className?: string;
}

export interface LinkButtonProps extends LinkProps {
  buttonProps: ButtonProps;
  href: string;
  className?: string;
}

export interface ButtonProps {
  variant: 'PRIMARY' | 'OUTLINE';
  className?: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
}

export interface WebinarDataProps {
  meta: WebinarMetaDataProps;
  // header: WebinarMetaDataProps;
  aboutWebinar: WebinarAboutProps;
  instructor: WebinarInstructorCardProps;
}

export interface WebinarMetaDataProps {
  title: string;
  description: string;
  date: string;
  time: string;
  image: string;
  imageAltText: string;
  instructor: WebinarInstructorDataProps;
}

interface WebinarInstructorDataProps {
  name: string;
  designation: string;
  image: string;
  imageAltText: string;
}

export interface WebinarHeaderCountDownProps {
  id: string;
  heading: string;
  timerList: string;
}

export interface WebinarAboutProps {
  // heading: string;
  // schedule: WebinarAboutScheduleProps;
  aboutText: string[];
  whatWillYouLearn: string[];
}

export interface WebinarAboutScheduleProps {
  date: string;
  dateIcon: string;
  dateIconAltText: string;
  time: string;
  timeIcon: string;
  timeIconAltText: string;
}

export interface WebinarWhatWillYouLearnProps {
  id: string;
  heading: string;
  content: WebinarWhatWillYouLearnContentProps[];
}

export interface WebinarWhatWillYouLearnContentProps {
  id: string;
  paragraph: string;
}

export interface WebinarInstructorCardProps {
  heading: string;
  image: string;
  imageAltText: string;
  name: string;
  // socialIcon: string;
  designation: string;
  about: string[];
}

export interface ProgramCardProps {
  image: string;
  imageAltText: string;
  title: string;
  content: string;
  href: string;
  active: boolean;
}

export interface PageLayoutProps {
  children: React.ReactNode;
}

export interface SectionHeaderProps {
  heading: string;
  focusText: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export interface CardSectionContainerProps {
  children: React.ReactNode;
  isWidthFull?: boolean;
  className?: string;
}

export interface CardGradientContainerProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
}

export interface SkillCardProps {
  skilledDetails: SkillProps[];
  title: string;
}

export interface WeGuideDifferentlyCardProps {
  id?: string;
  image: string;
  imageAltText: string;
  title: string;
  content: string;
}

export interface NotAnotherTechCourseCardProps {
  id?: string;
  image: string;
  imageAltText: string;
  title: string;
  content: string;
}

export interface FlexContainerProps {
  children?: React.ReactNode;
  itemCenter?: boolean;
  justifyCenter?: boolean;
  className?: string;
  direction?: 'row' | 'col';
}

export interface WebinarDescriptionProps {
  paragraphs: string[];
  flexProps: FlexContainerProps;
}

export interface TestimonialCardProps {
  id?: string;
  image: string;
  imageAltText: string;
  title: string;
  content: string;
}

export interface FooterLinkProps {
  id?: string;
  label: string;
  href: string;
  target?: 'BLANK';
}

export interface FooterLinksContainerProps {
  title: string;
  urls: FooterLinkProps[];
}

export interface MicroCampBGGradientContainerProps {
  children: React.ReactNode;
}

export interface MicroCampFeatureCardProps {
  title: string;
  content: string;
}

export interface MicroCampFeaturePricingCardProps {
  id: string;
  content: string;
}

export interface TechEducationForEveryoneProps {
  heading: string;
  title: string;
  content: string;
}

export interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface OpportunityCardProps {
  id?: string;
  heading: string;
  title: string;
  content: string;
}

export interface WhatWeDoForYouCardProps {
  image: string;
  imageAltText: string;
  title: string;
  content: string;
}

export interface WeToughtAtCardProps {
  id?: string;
  image: string;
  imageAltText: string;
}

export type GenerateSectionPathProps = {
  basePath: string;
  sectionID: string;
};

export interface SEOProps {
  slug: PageSlug;
}

export interface SkillsContainerProps {
  skills: SkillsProps[];
}

export interface PillProps {
  text: string;
  variant: 'PRIMARY' | 'SECONDARY';
  textStyleClasses?: string;
}

export interface CountdownTimerContainerProps {
  date: string;
}

export interface TimerItemProps {
  timer: string;
}

export interface IconPillProps {
  iconPath: string;
  iconAltText: string;
  label: string;
  className?: string;
  backgroundColor?: string;
  labelColor?: string;
}

export interface WebinarAboutInstructorProps {
  containerClasses?: string;
  imagePath: string;
  imageAltText: string;
  name: string;
  position: string;
  linkedInURL?: string;
}

export interface WeTaughtAtCardProps {
  image: string;
  imageAltText: string;
}

export interface CountdownTimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface AboutWebinarContainerProps
  extends WebinarAboutProps,
    WebinarMetaDataProps {}
