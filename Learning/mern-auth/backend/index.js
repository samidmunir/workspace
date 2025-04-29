import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js'
import authRoutes from './routes/auth.route.js'

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT: [${PORT}]`);
    connectDB();
});