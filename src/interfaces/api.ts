import { ProjectChapter } from '.';

export type APIMethodTypes = 'GET' | 'POST' | 'PATCH';

export interface APIMakeRquestProps {
  method?: APIMethodTypes;
  url: string;
  headers?: { [key: string]: string };
  body?: any;
}

export interface ClientAPIResponseProps {
  status: boolean;
  data?: any;
}

export interface APIResponseProps extends ClientAPIResponseProps {
  message?: string;
  error?: any;
}

export interface ApiHookResultProps {
  data: any | undefined;
  isSuccess: boolean;
  loading: boolean;
  error: any;
  makeRequest: (params: APIMakeRquestProps) => Promise<void>;
}

export interface ClientAPIResponse {
  status: boolean;
  data?: any;
}

export interface APIResponseType extends ClientAPIResponse {
  message?: string;
  error?: any;
}

export type DatabaseQueryResponseType = {
  data?: any;
  error?: any;
};

export interface AddProjectRequestPayloadProps {
  name: string;
  slug: string;
  description: string;
  coverImageURL: string;
  requiredSkills: SkillsType[];
  roadmap: RoadmapsType;
  difficultyLevel: DifficultyType;
}

export interface AddSectionRequestPayloadProps {
  sectionId: string;
  sectionName: string;
  chapters: ProjectChapter[];
}

export interface AddChapterRequestPayloadProps {
  chapterId?: string;
  chapterName: string;
  content: string;
}

export interface UpateSectionRequestPayloadProps {
  projectId: string;
  sectionId: string;
  updatedSectionName: string;
}

export interface DeleteSectionRequestPayloadProps {
  projectId: string;
  sectionId: string;
}

export interface UpdateProjectRequestPayloadProps {
  updatedData: {
    name?: string;
    meta?: string;
    description?: string;
    coverImageURL?: string;
    requiredSkills?: SkillsType[];
    roadmap?: RoadmapsType;
    difficultyLevel?: DifficultyType;
  };
  projectId: string;
}

export type SkillsType =
  | 'HTML'
  | 'CSS'
  | 'JavaScript'
  | 'React'
  | 'TypeScript'
  | 'NodeJS'
  | 'ExpressJS'
  | 'MongoDB'
  | 'TailwindCSS'
  | 'NextJS';

export type RoadmapsType = 'Frontend' | 'Backend' | 'Fullstack';

export type DifficultyType = 'Beginner' | 'Intermediate' | 'Advanced';
