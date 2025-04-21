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

    if (!record.title || !record.company || !record.description || !record.type || !record.location || !record.salary || !record.link) {
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

export const updateRecord = async (req, res) => {
    const {id} = req.params;

    const record = req.body;

    if (mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(404).json({success: false, message: 'Record not found (invalid Record ID)'});
    }

    try {
        const updatedRecord = await Record.findByIdAndUpdate(id, record, {new: true});
        res.status(200).json({success: true, data: updatedRecord});
    } catch (error) {
        console.log('Error in updateRecord():', error.message);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
};

export const deleteRecord = async (req, res) => {
    const {id} = req.params;

    try {
        await Record.findByIdAndDelete(id);
        res.status(200).json({success: true, message: 'Record deleted successfully'});
    } catch (error) {
        console.log('Error in deleteRecord():', error.message);
        res.status(404).json({success: false, message: 'Record not found'});
    }
};