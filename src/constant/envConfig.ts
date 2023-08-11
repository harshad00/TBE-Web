const MONGODB_URI = process.env.MONGODB_URI as string;
const DATABASE_NAME = process.env.DATABASE_NAME as string;
const GOOGLE_AUTH_CLIENT_ID = process.env.GOOGLE_AUTH_CLIENT_ID as string;
const GOOGLE_AUTH_CLIENT_SECRET = process.env
  .GOOGLE_AUTH_CLIENT_SECRET as string;

export {
  MONGODB_URI,
  DATABASE_NAME,
  GOOGLE_AUTH_CLIENT_ID,
  GOOGLE_AUTH_CLIENT_SECRET,
};
