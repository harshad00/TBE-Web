import { GetSEOMetaResponseType, PageSlug } from './global';

export interface PageProps {
  slug: PageSlug;
  seoMeta: GetSEOMetaResponseType;
}
