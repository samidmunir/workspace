import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import recordRoutes from './routes/record.route.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/records', recordRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Career Dock server is running on http://localhost:${PORT}`);
});