import { useState } from 'react';
import { useRecordData } from '../data/record.js';

const EditModal = (props) => {
    const [editedRecord, setEditedRecord] = useState({
        title: props.title,
        company: props.company,
        type: props.type,
        location: props.location,
        salary: props.salary,
        description: props.description,
    });

    const {updateRecord} = useRecordData();

    const handleSaveEdit = async () => {
        const updated = {...editedRecord};
        await updateRecord(props.id, updated);
        props.handleClose();
    };

    return (
        <div className='fixed inset-0 w-[75%] h-[600px] mx-auto my-auto bg-zinc-400 rounded-lg shadow-lg flex justify-center items-center'>
            {/* <div className='p-4'>
                <h1 className='text-4xl text-zinc-950 text-center font-bold'>Create a new record</h1>
            </div> */}
            <div className='w-[1000px]'>
                <form className='w-[75%] mx-auto bg-zinc-950 rounded-lg shadow-lg p-4'>
                    <div className='p-4 flex justify-center gap-8'>
                        <div>
                            <label className='text-amber-500 block'>Job Title</label>
                            <input 
                                type='text' 
                                placeholder='Job title'
                                value={editedRecord.title}
                                onChange={(e) => setEditedRecord({...editedRecord, title: e.target.value})}
                                className='placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-1 px-2 focus:outline-none focus:opacity-100 transition-all text-zinc-500'
                            />
                        </div>
                        <div>
                            <label className='text-amber-500 block'>Job company</label>
                            <input 
                                type='text' 
                                placeholder='Job company'
                                value={editedRecord.company}
                                onChange={(e) => setEditedRecord({...editedRecord, company: e.target.value})}
                                className='placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-1 px-2 focus:outline-none focus:opacity-100 transition-all text-zinc-500' 
                            />
                        </div>
                    </div>
                    <div className='p-4 flex justify-center gap-8'>
                        <div>
                            <label className='text-amber-500 block'>Job type</label>
                            <input
                                value={editedRecord.type}
                                onChange={(e) => setEditedRecord({...editedRecord, type: e.target.value})}
                                type='text' 
                                placeholder='Job type'
                                className='placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-1 px-2 focus:outline-none focus:opacity-100 transition-all text-zinc-500' 
                            />
                        </div>
                        <div>
                            <label className='text-amber-500 block'>Job location</label>
                            <input 
                                type='text' 
                                placeholder='Job location'
                                value={editedRecord.location}
                                onChange={(e) => setEditedRecord({...editedRecord, location: e.target.value})}
                                className='placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-1 px-2 focus:outline-none focus:opacity-100 transition-all text-zinc-500' 
                            />
                        </div>
                        <div>
                            <label className='text-amber-500 block'>Job salary</label>
                            <input 
                                type='number' 
                                placeholder='$00000/yr'
                                value={editedRecord.salary}
                                onChange={(e) => setEditedRecord({...editedRecord, salary: e.target.value})}
                                className='placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-1 px-2 focus:outline-none focus:opacity-100 transition-all text-zinc-500' 
                            />
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='mx-auto w-[500px]'>
                            <label className='text-amber-500 block'>Job description</label>
                            <input 
                                type='text' 
                                placeholder='Job description'
                                maxLength={5000}
                                value={editedRecord.description}
                                onChange={(e) => setEditedRecord({...editedRecord, description: e.target.value})}
                                className='placeholder:text-zinc-500 border-2 border-amber-500 w-[500px] h-[200px] py-1 px-2 placeholder:text-center opacity-75 focus:outline-none focus:opacity-100 transition-all text-zinc-500' 
                            />
                        </div>
                    </div>
                    <div className='p-4 flex justify-between'>
                        <button onClick={props.handleClose} className='border-2 border-rose-500 text-rose-500 text-center mx-auto py-1 px-2 font-bold text-lg rounded-lg hover:bg-rose-500 hover:text-zinc-950 hover:scale-110 transition-all'>Close</button>
                        <button onClick={handleSaveEdit} className='border-2 border-emerald-500 text-emerald-500 text-center mx-auto py-1 px-2 font-bold text-lg rounded-lg hover:bg-emerald-500 hover:text-zinc-950 hover:scale-110 transition-all'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;