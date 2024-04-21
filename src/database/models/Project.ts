import { databaseModels } from '@/constant';
import {
  ProjectChapter,
  ProjectDocumentModel,
  ProjectSection,
} from '@/interfaces';
import { Model, Schema, models, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const chapterSchema: Schema<ProjectChapter> = new Schema({
  chapterId: { type: String, default: uuidv4 },
  chapterName: { type: String, required: true },
  content: { type: String, required: true },
});

const sectionSchema: Schema<ProjectSection> = new Schema({
  sectionName: { type: String, required: true },
  chapters: [chapterSchema],
});

const projectSchema: Schema<ProjectDocumentModel> =
  new Schema<ProjectDocumentModel>({
    name: { type: String, required: true },
    meta: { type: String, required: true },
    sections: [sectionSchema],
  });

const Project: Model<ProjectDocumentModel> =
  models?.Project ||
  model<ProjectDocumentModel>(databaseModels.PROJECT, projectSchema);

export default Project;
