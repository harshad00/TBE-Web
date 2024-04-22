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

export interface UpdateProjectRequestPayloadProps {
  id: string;
  name: string;
  meta: string;
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
