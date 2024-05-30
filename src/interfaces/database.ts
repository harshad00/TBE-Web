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
  thumbnailLink: string;
  roadmap: RoadmapsType;
  liveOn: Date;
  createdAt: Date;
}

export interface CourseSectionModel {
  title: string;
  courseId: Schema.Types.ObjectId;
  createdAt: Date;
}

export interface CourseChapterModel {
  title: string;
  sectionId: Schema.Types.ObjectId;
  content: string;
  createdAt: Date;
}

export interface UserCourseModel {
  userId: Schema.Types.ObjectId;
  courseId: Schema.Types.ObjectId;
  chaptersId: [Schema.Types.ObjectId];
}
