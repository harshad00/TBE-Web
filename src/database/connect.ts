// import { DATABASE_NAME, MONGODB_URI } from '@/constant';
// import { MongoClient } from 'mongodb';

// const connectToDatabase = async () => {
//   const client = await MongoClient.connect(MONGODB_URI);
//   return client.db(DATABASE_NAME);
// };

// export { connectToDatabase };

// db.ts

import mongoose from 'mongoose';
import { MONGODB_URI } from '@/constant';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectToDatabase;
