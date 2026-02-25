import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const options = {
      serverSelectionTimeoutMS: 5000,
    };
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    console.log('Running without database');
  }
};

export default connectDB;
