import mongoose from 'mongoose';
import colors from 'colors';

console.log(process.env.MONGO_URI)
export const connectDB = async () => {
  try {
    const {connection} = await mongoose.connect(process.env.MONGO_URI);
    const url = `${connection.host}:${connection.port}`;
    console.log(colors.magenta.bold(`Database connected to ${url}`));
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
}