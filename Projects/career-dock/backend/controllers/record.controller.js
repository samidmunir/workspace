import mongoose from 'mongoose';
import Record from '../models/record.model.js';

export const getRecords = async (req, res) => {
    try {
        const records = await Record.find({});
        res.status(200).json({success: true, data: records});
    } catch (error) {
        console.log('Error in getRecords():', error.message);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
};

export const createRecord = async (req, res) => {
    const record = req.body;

    if (!record.title || !record.company || !record.description || !record.type || !record.location || !record.salary) {
        return res.status(400).json({success: false, message: 'All fields are required'});
    }

    const newRecord = new Record(record);

    try {
        await newRecord.save();
        res.status(201).json({success: true, data: newRecord});
    } catch (error) {
        console.log('Error in createRecord():', error.message);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
};