import { FooterLinksContainerProps, MicroCampFeatureCardProps } from '.';

export interface SkillProps {
  id?: string;
  name: string;
  image: string;
  imageAltText: string;
}

export interface SkillsProps {
  id: string;
  title: string;
  details: SkillProps[];
}

export interface FooterNavigationDataProps extends FooterLinksContainerProps {
  id: string;
  isShow: boolean;
}

export interface MicroCampFeatureCardContentProps
  extends MicroCampFeatureCardProps {
  id: string;
}

export type PageSlug =
  | '/'
  | '/404'
  | '/contact'
  | '/junior-in-web-engineering'
  | '/be-frontend-master'
  | '/be-backend-master'
  | '/2-hour-design';

export type GetSEOMetaResponseType = {
  title: string;
  siteName: string;
  description: string;
  url: string;
  type: string;
  robots: string;
  image: string;
};
