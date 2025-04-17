import mongoose from 'mongoose';
import Record from '../models/record.model.js';

export const getProducts = async (req, res) => {
    try {
        const records = await Record.find({});
        res.status(200).json({success: true, data: records});
    } catch (error) {
        console.log('Error in getProducts():', error.message);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
};