import mongoose, { Document, Schema } from 'mongoose';

export interface Lead extends Document {
  name: string;
  email: string;
}

const leadSchema = new Schema<Lead>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<Lead>('Lead', leadSchema);
