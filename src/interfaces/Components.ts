import { HTMLInputTypeAttribute, MouseEventHandler, ReactNode } from 'react';
import { GetSEOMetaResponseType, TopNavbarLinkProps } from '.';

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
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  children: React.ReactNode;
  variant?: 'SUCCESS' | 'ERROR';
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
  isDark?: boolean;
}

export interface LinkButtonProps extends LinkProps {
  buttonProps: ButtonProps;
  href: string;
  className?: string;
}

export interface ButtonProps {
  variant: 'PRIMARY' | 'OUTLINE' | 'GHOST';
  className?: string;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  isLoading?: boolean;
}

export interface PageLayoutProps {
  children: React.ReactNode;
}

export interface SectionHeaderProps {
  heading: string;
  focusText: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  flexContainerProps?: FlexContainerProps;
  subtext?: string;
}

export interface CardSectionContainerProps {
  children: React.ReactNode;
  isWidthFull?: boolean;
  className?: string;
  gap?: string;
}

export interface GradientContainerProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  childrenClassName?: string;
}

export interface PrimaryCardProps {
  id?: string;
  image: string;
  imageAltText: string;
  title: string;
  content: string;
  borderColour?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface FlexContainerProps {
  children?: React.ReactNode;
  itemCenter?: boolean;
  justifyCenter?: boolean;
  className?: string;
  direction?: 'row' | 'col';
  wrap?: boolean;
  fullWidth?: boolean;
  id?: string;
}

export interface TestimonialCardProps {
  id?: string;
  image: string;
  imageAltText: string;
  title: string;
  content: string;
  work: string;
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

export interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

export type GenerateSectionPathProps = {
  basePath: string;
  sectionID: string;
};

export interface SEOProps {
  seoMeta: GetSEOMetaResponseType;
}

export interface PillProps {
  text: string;
  variant: 'PRIMARY' | 'SECONDARY';
  textStyleClasses?: string;
  containerClasses?: string;
}

export interface IconPillProps {
  iconPath: string;
  iconAltText: string;
  label: string;
  className?: string;
  backgroundColor?: string;
  labelColor?: string;
}

export interface WeTaughtAtCardProps {
  image: string;
  imageAltText: string;
}

export interface PopoverContainerProps {
  label: string;
  children: ReactNode;
  panelClasses?: string;
}

export interface ImageLinkProps {
  linkProps: LinkProps;
  imageProps: ImageContainerProps;
}

export interface SelectInputProps {
  list: any[];
  onChange: (value: string) => void;
  selectedItem: string;
}

export interface InputFieldContainerProps {
  label: string;
  type: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
  className?: string;
  value?: string;
  isOptional?: boolean;
}

export interface LoadingSpinnerProps {
  height?: number;
  width?: number;
  marginClass?: string;
  className?: string;
}

export interface NavbarDropdownContainerProps {
  links: TopNavbarLinkProps[];
}

export interface MobileNavbarLinksContainerProps {
  title: string;
  links: TopNavbarLinkProps[];
}

export interface ProductCardProps {
  id: string;
  image: string;
  imageAltText: string;
  title: string;
  content: string;
  href: string;
  active: boolean;
  ctaText?: string;
}

export interface LandingPageHeroProps {
  sectionHeaderProps: SectionHeaderProps;
  primaryButton: ReactNode;
  secondaryButton?: ReactNode;
  backgroundImageUrl: string;
  heroText: string;
}

export interface CardContainerAProps {
  heading: string;
  focusText: string;
  cards: PrimaryCardProps[];
  borderColour?: 1 | 2 | 3 | 4 | 5 | 6;
}
