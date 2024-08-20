import { BaseShikshaCourseResponseProps } from '.';
import { ProjectDocumentModel } from './database';
import { GetSEOMetaResponseType } from './global';

export interface PageProps {
  slug: any;
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
  meta: string;
  currentChapterId: string;
}
