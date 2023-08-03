import { AdminUserDocumentModel } from '@/interfaces';
import mongoose, { Model, Schema } from 'mongoose';

const adminUserSchema: Schema<AdminUserDocumentModel> =
  new Schema<AdminUserDocumentModel>(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      googleId: { type: String, required: true },
    },
    { timestamps: true }
  );

const AdminUser: Model<AdminUserDocumentModel> =
  mongoose.models.AdminUser ||
  mongoose.model<AdminUserDocumentModel>('AdminUser', adminUserSchema);

export default AdminUser;
