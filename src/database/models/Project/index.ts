import {
  DIFFICULTY_LEVEL,
  PROJECT_SKILLS,
  ROADMAPS,
  databaseModels,
} from '@/constant';
import {
  ProjectChapter,
  ProjectDocumentModel,
  ProjectSection,
} from '@/interfaces';
import { Model, Schema, models, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const chapterSchema: Schema<ProjectChapter> = new Schema(
  {
    chapterId: { type: String, default: uuidv4 },
    chapterName: { type: String, required: true },
    content: { type: String, required: true },
    isOptional: { type: Boolean, default: false },
  },
  { _id: false }
);

const sectionSchema: Schema<ProjectSection> = new Schema(
  {
    sectionId: { type: String, required: true },
    sectionName: { type: String, required: true },
    chapters: [chapterSchema],
  },
  { _id: false }
);

const projectSchema: Schema<ProjectDocumentModel> =
  new Schema<ProjectDocumentModel>(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      coverImageURL: { type: String, required: true },
      slug: { type: String, required: true },
      meta: { type: String },
      sections: [sectionSchema],
      requiredSkills: [{ type: String, enum: PROJECT_SKILLS, required: true }],
      roadmap: { type: String, enum: ROADMAPS, required: true },
      difficultyLevel: {
        type: String,
        enum: DIFFICULTY_LEVEL,
        required: true,
      },
      isActive: { type: Boolean, default: false },
    },
    { timestamps: true }
  );

const Project: Model<ProjectDocumentModel> =
  models?.Project ||
  model<ProjectDocumentModel>(databaseModels.PROJECT, projectSchema);

export default Project;
