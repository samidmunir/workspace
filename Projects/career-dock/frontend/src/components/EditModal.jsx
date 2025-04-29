import { useState } from 'react';
import { useRecordData } from '../data/record.js';

const EditModal = (props) => {

    const [editedRecord, setEditedRecord] = useState({
        title: props.title,
        company: props.company,
        type: props.type,
        location: props.location,
        salary: props.salary,
        link: props.link,
        description: props.description,
    });

    const {updateRecord} = useRecordData();

    const handleSaveEdit = async () => {
        const updated = {...editedRecord};
        await updateRecord(props.id, updated);
        props.handleClose();
    };

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4'>
            <div className='w-full max-w-4xl bg-zinc-400 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]'>
                <form className='bg-zinc-950 rounded-lg shadow-lg p-4 space-y-6'>
                    <div className='flex flex-col md:flex-row justify-center gap-6'>
                        <div className='w-full'>
                            <label className='text-amber-500 block'>Job Title</label>
                            <input 
                                type='text' 
                                placeholder='Job title'
                                value={editedRecord.title}
                                onChange={(e) => setEditedRecord({...editedRecord, title: e.target.value})}
                                className='w-full placeholder:text-zinc-500 border-2 border-amber-500 py-2 px-3 opacity-75 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg'
                            />
                        </div>
                        <div className='w-full'>
                            <label className='text-amber-500 block'>Job Company</label>
                            <input 
                                type='text' 
                                placeholder='Job company'
                                value={editedRecord.company}
                                onChange={(e) => setEditedRecord({...editedRecord, company: e.target.value})}
                                className='w-full placeholder:text-zinc-500 border-2 border-amber-500 py-2 px-3 opacity-75 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                            />
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center gap-6'>
                        <div className='w-full'>
                            <label className='text-amber-500 block'>Job Type</label>
                            <input
                                type='text' 
                                placeholder='Job type'
                                value={editedRecord.type}
                                onChange={(e) => setEditedRecord({...editedRecord, type: e.target.value})}
                                className='w-full placeholder:text-zinc-500 border-2 border-amber-500 py-2 px-3 opacity-75 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                            />
                        </div>
                        <div className='w-full'>
                            <label className='text-amber-500 block'>Job Location</label>
                            <input 
                                type='text' 
                                placeholder='Job location'
                                value={editedRecord.location}
                                onChange={(e) => setEditedRecord({...editedRecord, location: e.target.value})}
                                className='w-full placeholder:text-zinc-500 border-2 border-amber-500 py-2 px-3 opacity-75 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                            />
                        </div>
                        <div className='w-full'>
                            <label className='text-amber-500 block'>Job Salary</label>
                            <input 
                                type='number' 
                                placeholder='$00000/yr'
                                value={editedRecord.salary}
                                onChange={(e) => setEditedRecord({...editedRecord, salary: e.target.value})}
                                className='w-full placeholder:text-zinc-500 border-2 border-amber-500 py-2 px-3 opacity-75 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                            />
                        </div>
                    </div>
                    <div className='w-full'>
                        <label className='text-amber-500 block'>Job Link</label>
                        <input 
                            type='text'
                            placeholder='Job link'
                            maxLength={250}
                            value={editedRecord.link}
                            onChange={(e) => setEditedRecord({...editedRecord, link: e.target.value})}
                            className='w-full resize-none placeholder:text-zinc-500 placeholder:text-center border-2 border-amber-500 py-2 px-3 opacity-75 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                        />
                    </div>
                    <div className='w-full'>
                        <label className='text-amber-500 block'>Job Description</label>
                        <textarea 
                            placeholder='Job description'
                            maxLength={5000}
                            value={editedRecord.description}
                            onChange={(e) => setEditedRecord({...editedRecord, description: e.target.value})}
                            className='w-full h-40 resize-none placeholder:text-zinc-500 placeholder:text-center border-2 border-amber-500 py-2 px-3 opacity-75 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                        />
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between gap-4'>
                        <button onClick={props.handleClose} type='button' className='border-2 border-rose-500 text-rose-500 py-2 px-4 font-bold text-lg rounded-lg hover:bg-rose-500 hover:text-zinc-950 hover:scale-110 transition-all'>Close</button>
                        <button onClick={handleSaveEdit} type='button' className='border-2 border-emerald-500 text-emerald-500 py-2 px-4 font-bold text-lg rounded-lg hover:bg-emerald-500 hover:text-zinc-950 hover:scale-110 transition-all'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
