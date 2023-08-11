import mongoose from 'mongoose';
import { MONGODB_URI } from '@/constant';

const connectToDatabase = async () => {
  console.log('MONGODB_URI', MONGODB_URI);
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectToDatabase;
