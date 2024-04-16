import { FooterLinksContainerProps } from '.';

export interface FooterNavigationDataProps extends FooterLinksContainerProps {
  id: string;
  isShow: boolean;
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
