import { ProgramLeadDocument } from '@/interfaces';
import mongoose, { Model, Schema } from 'mongoose';

const programLeadSchema: Schema<ProgramLeadDocument> =
  new Schema<ProgramLeadDocument>(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      programName: { type: String, required: true },
      status: { type: String, default: 'Pending' },
    },
    { timestamps: true }
  );

const ProgramLead: Model<ProgramLeadDocument> =
  mongoose.models.ProgramLead ||
  mongoose.model<ProgramLeadDocument>('ProgramLead', programLeadSchema);

export default ProgramLead;
