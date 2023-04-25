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
  | '/junior-in-web-engineering'
  | '/be-frontend-master'
  | '/be-backend-master'
  | '/the-boring-workshops'
  | '/404';
