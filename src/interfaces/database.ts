import { Document, Schema } from 'mongoose';
import { DifficultyType, RoadmapsType, SkillsType } from '.';

export interface UserModel {
  userId: string;
  name: string;
  email: string;
  username: string;
}

export interface ProjectChapter {
  chapterId: string;
  chapterName: string;
  content: string;
  isOptional?: boolean;
}

export interface ProjectSection {
  sectionId: string;
  sectionName: string;
  chapters: ProjectChapter[];
}

export interface ProjectDocumentModel extends Document {
  name: string;
  meta: string;
  slug: string;
  description: string;
  coverImageURL: string;
  sections: ProjectSection[];
  requiredSkills: SkillsType[];
  roadmap: RoadmapsType;
  difficultyLevel: DifficultyType;
  isActive: boolean;
}

export interface CourseModel extends Document {
  title: string;
  description: string;
  coverImageURL: string;
  liveOn: Date;
  slug: string;
  meta: string;
  chapters: CourseChapterModel[];
  roadmap: RoadmapsType;
  difficultyLevel: DifficultyType;
}

export interface CourseChapterModel {
  chapterId: string;
  chapterName: string;
  content: string;
  isOptional?: boolean;
}

export interface UserCourseModel {
  userId: string;
  courseId: string;
  chaptersId: [string];
}
