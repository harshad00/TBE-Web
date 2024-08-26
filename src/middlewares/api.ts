import { envConfig } from '@/constant';
import mongoose from 'mongoose';

// Connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(envConfig.MONGODB_URI);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export { connectDB };
