import { AdminUser } from '..';
import { AddAnAdminRequestPayload } from '@/interfaces';

// Add An Admin to DB
const addAnAdminToDB = async ({
  name,
  email,
  image,
}: AddAnAdminRequestPayload) => {
  const adminUser = new AdminUser({ name, email, image });
  await adminUser.save();

  return adminUser;
};

// Get An Admin By Email
const getAnAdminByEmailFromDB = async (email: string) => {
  return await AdminUser.findOne({ email });
};

export { addAnAdminToDB, getAnAdminByEmailFromDB };
