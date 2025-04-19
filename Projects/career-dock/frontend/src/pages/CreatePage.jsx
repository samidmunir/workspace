import { useRecordData } from '../data/record.js';
import { useState } from 'react';

const CreatePage = () => {
    const [newRecord, setNewRecord] = useState({
        title: '',
        company: '',
        type: '',
        location: '',
        salary: 0,
        description: ''
    });

    const {createRecord} = useRecordData();

    const handleCreateRecord = async () => {
        // const {success, message} = await createRecord(newRecord);
        await createRecord(newRecord);
    };

    return (
        <div className='w-[75%] min-h-[550px] mx-auto mt-8 bg-zinc-400 rounded-lg shadow-lg'>
            <div className='p-4'>
                <h1 className='text-4xl text-zinc-950 text-center font-bold'>Create a new record</h1>
            </div>
            <div className='pb-8'>
                <form className='w-[75%] mx-auto bg-zinc-950 rounded-lg shadow-lg p-4'>
                    <div className='p-4 flex justify-center gap-8'>
                        <div>
                            <label className='text-amber-500 block'>Job Title</label>
                            <input 
                                type='text' 
                                placeholder='Job title'
                                value={newRecord.title}
                                onChange={(e) => setNewRecord({...newRecord, title: e.target.value})}
                                className='placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-1 px-2 focus:outline-none focus:opacity-100 transition-all text-zinc-500'
                            />
                        </div>
                        <div>
                            <label className='text-amber-500 block'>Job company</label>
                            <input 
                                type='text' 
                                placeholder='Job company'
                                value={newRecord.company}
                                onChange={(e) => setNewRecord({...newRecord, company: e.target.value})}
                                className='placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-1 px-2 focus:outline-none focus:opacity-100 transition-all text-zinc-500' 
                            />
                        </div>
                    </div>
                    <div className='p-4 flex justify-center gap-8'>
                        <div>
                            <label className='text-amber-500 block'>Job type</label>
                            <input
                                value={newRecord.type}
                                onChange={(e) => setNewRecord({...newRecord, type: e.target.value})}
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
                                value={newRecord.location}
                                onChange={(e) => setNewRecord({...newRecord, location: e.target.value})}
                                className='placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-1 px-2 focus:outline-none focus:opacity-100 transition-all text-zinc-500' 
                            />
                        </div>
                        <div>
                            <label className='text-amber-500 block'>Job salary</label>
                            <input 
                                type='number' 
                                placeholder='$00000/yr'
                                value={newRecord.salary}
                                onChange={(e) => setNewRecord({...newRecord, salary: e.target.value})}
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
                                value={newRecord.description}
                                onChange={(e) => setNewRecord({...newRecord, description: e.target.value})}
                                className='placeholder:text-zinc-500 border-2 border-amber-500 w-[500px] h-[200px] py-1 px-2 placeholder:text-center opacity-75 focus:outline-none focus:opacity-100 transition-all text-zinc-500' 
                            />
                        </div>
                    </div>
                    <div className='p-4 text-center'>
                        <button onClick={handleCreateRecord} className='border-2 border-emerald-500 text-emerald-500 text-center mx-auto py-1 px-2 font-bold text-lg rounded-lg hover:bg-emerald-500 hover:text-zinc-950 hover:scale-110 transition-all'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePage;