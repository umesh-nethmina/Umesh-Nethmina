/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  const MONGODB_URI = process.env.MONGODB_URI as string;

  if (!MONGODB_URI) {
    if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
       console.warn('MONGODB_URI is not defined. Skipping DB connection in build phase.');
    } else {
       throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    if (MONGODB_URI) {
      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        return mongoose;
      });
    }
  }

  try {
    if (cached.promise) {
      cached.conn = await cached.promise;
    }
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
