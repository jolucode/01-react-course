import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const url = 'mongodb+srv://root:ww12Fijo@cluster0.tla3seo.mongodb.net/linktree_node_typescript';
    const {connection} = await mongoose.connect(url);
    const url2 = `${connection.host}:${connection.port}`;
    console.log('Database connected to:', url2);
    
    
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
}