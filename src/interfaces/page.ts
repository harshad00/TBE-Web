import { ProjectDocumentModel } from './database';
import { GetSEOMetaResponseType, PageSlug } from './global';

export interface PageProps {
  slug: PageSlug;
  seoMeta: GetSEOMetaResponseType;
}

export interface ProjectPageProps extends PageProps {
  project: Pick<
    ProjectDocumentModel,
    | '_id'
    | 'name'
    | 'meta'
    | 'roadmap'
    | 'difficultyLevel'
    | 'sections'
    | 'requiredSkills'
  >;
}
