import express from 'express';
import { createRecord, deleteRecord, getRecords, updateRecord } from '../controllers/record.controller.js';

const router = express.Router();

router.get('/', getRecords);

router.post('/', createRecord)

router.put('/:id', updateRecord);

router.delete('/:id', deleteRecord);

export default router;