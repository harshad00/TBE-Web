import {
  FooterLinksContainerProps,
  MicroCampFeatureCardProps,
  MicroCampPricingCardProps,
  MicrocampInstructorProps,
} from '.';

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
  | '/roadmaps'
  | '/projects'
  | '/workshops'
  | '/shiksha'
  | '/os';

export type GetSEOMetaResponseType = {
  title: string;
  siteName: string;
  description: string;
  url: string;
  type: string;
  robots: string;
  image: string;
};

export type ProductLabelType =
  | 'Roadmaps'
  | 'The Boring Projects'
  | 'Shiksha'
  | 'The Boring Workshops'
  | 'The Boring Open Source';

export interface ProductDataProps {
  [key: string]: {
    label: ProductLabelType;
    slug: PageSlug;
    description: string;
  };
}

export interface MicrocampHeaderProps {
  heading: {
    primary: string;
    secondary: string;
  };
  subheading: string;
  cta: {
    primary: string;
  };
}

export interface MicrocampInThisCohortSectionProps {
  label: string;
  features: MicroCampFeatureCardContentProps[];
}

export interface MicrocampOfferingsProps {
  id: string;
  title: string;
  content: string;
  image: string;
  imageAltText: string;
}

export interface MicrocampPricingProps {
  basePrice: number;
  sellingPrice: number;
  valueProvided: MicroCampPricingCardProps[];
}

export interface MicrocampDataProps {
  slug: PageSlug;
  name: ProductLabelType;
  header: MicrocampHeaderProps;
  chooseCohortHeaderTitle: string;
  instructor: MicrocampInstructorProps;
  inThisCohort: MicrocampInThisCohortSectionProps;
  opportunities?: MicrocampOpportunitiesProps;
  skills: SkillsProps[];
  offerings: MicrocampOfferingsProps[];
  pricing: MicrocampPricingProps;
}

export interface TopNavbarLinkProps {
  id: string;
  name: string;
  href: string;
  description?: string;
  target?: 'BLANK';
}

export interface TopNavbarContainerProps {
  products: TopNavbarLinkProps[];
  links: TopNavbarLinkProps[];
}

export interface MicrocampOpportunitiesCardProps {
  label: string;
  value: string;
  subtitle: string;
}
export interface MicrocampOpportunitiesProps {
  heading: string;
  cards: MicrocampOpportunitiesCardProps[];
}

export type CohortLeadStatus =
  | 'Pending'
  | 'Connected'
  | 'Interested'
  | 'Callback'
  | 'Not Interested';

export type CohortNameType =
  | 'Be Front-end Master'
  | 'Be Backend Master'
  | 'Junior In Web Engineering'
  | 'Placement Camp';

export type AuthUserType = 'USER' | 'ADMIN';

export interface NextAuthUserType {
  name: string;
  email: string;
  image: string;
}
export interface AuthUserInLocalStorageType {
  user: NextAuthUserType;
  type: AuthUserType;
}

export interface UserInLocalStorage {
  user: NextAuthUserType;
  type: AuthUserType;
}
