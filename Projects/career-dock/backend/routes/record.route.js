import express from 'express';
import { createRecord, getRecords } from '../controllers/record.controller.js';

const router = express.Router();

router.get('/', getRecords);

router.post('/', createRecord)

export default router;