import { Document } from 'mongoose';
import { DifficultyType, RoadmapsType, SkillsType } from '.';

export interface ProjectChapter {
  chapterId: string;
  chapterName: string;
  content: string;
}

export interface ProjectSection {
  sectionName: string;
  chapters: ProjectChapter[];
}

export interface ProjectDocumentModel extends Document {
  name: string;
  meta: string;
  description: string;
  coverImageURL: string;
  sections: ProjectSection[];
  requiredSkills: SkillsType[];
  roadmap: RoadmapsType;
  difficultyLevel: DifficultyType;
}
