import mongoose from 'mongoose';

const recordSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Job title is required'],
        trim: true,
        minLength: 5,
        maxLength: 100,
    },
    company: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    description: {
        type: String,
        required: [true, 'Job description is required'],
        trim: true,
        minLength: 20,
        maxLength: 5000,
    },
    type: {
        type: String,
        required: [true, 'Job type is required'],
        enum: ['full-time', 'part-time', 'contract', 'internship'],
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
        trim: true,
        minLength: 5,
        maxLength: 100,
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required'],
        min: 5000,
    },
    link: {
        type: String,
        required: [true, 'Job Link is required'],
    },
    status: {
        type: String,
        required: [true, 'Status is required'],
        enum: ['active', 'pending', 'inactive'],
        default: 'active',
    },
}, {timestamps: true});

const Record = mongoose.model('Record', recordSchema);

export default Record;