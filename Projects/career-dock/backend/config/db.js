import mongoose from 'mongoose';

export const connectDB = async () => {
    console.log(process.env.MONGO_URI);
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.log(`Error connecting to MongoDB\n\tError: ${error.message}`);
        process.exit(1);
    }
}