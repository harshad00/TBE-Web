import { Document } from 'mongoose';

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
  sections: ProjectSection[];
}
