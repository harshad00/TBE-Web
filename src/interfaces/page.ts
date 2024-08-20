import { BaseShikshaCourseResponseProps } from '.';
import { ProjectDocumentModel } from './database';
import { GetSEOMetaResponseType, PageSlug } from './global';

export interface PageProps {
  slug: PageSlug;
  seoMeta: GetSEOMetaResponseType;
  resolvedUrl?: string;
}

export type ProjectPickedPageProps = Pick<
  ProjectDocumentModel,
  | '_id'
  | 'name'
  | 'meta'
  | 'roadmap'
  | 'difficultyLevel'
  | 'sections'
  | 'requiredSkills'
>;

export interface ProjectPageProps extends PageProps {
  project: ProjectPickedPageProps;
  meta: string;
}

export interface CoursePageProps extends PageProps {
  course: BaseShikshaCourseResponseProps;
  courseSlug: string;
  meta: string;
}
