import { ProgramLeadDocumentModel } from '@/interfaces';
import mongoose, { Model, Schema } from 'mongoose';

const programLeadSchema: Schema<ProgramLeadDocumentModel> =
  new Schema<ProgramLeadDocumentModel>(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      programName: { type: String, required: true },
      status: { type: String, default: 'Pending' },
    },
    { timestamps: true }
  );

const ProgramLead: Model<ProgramLeadDocumentModel> =
  mongoose.models.ProgramLead ||
  mongoose.model<ProgramLeadDocumentModel>('ProgramLead', programLeadSchema);

export default ProgramLead;
