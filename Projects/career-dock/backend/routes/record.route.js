import express from 'express';
import { createRecord, getRecords, updateRecord } from '../controllers/record.controller.js';

const router = express.Router();

router.get('/', getRecords);

router.post('/', createRecord)

router.put('/:id', updateRecord);

export default router;