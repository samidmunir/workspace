import { useRecordData } from '../data/record.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const CreatePage = () => {
    const [newRecord, setNewRecord] = useState({
        title: '',
        company: '',
        type: '',
        location: '',
        salary: 0,
        link: '',
        description: ''
    });

    const {createRecord} = useRecordData();
    
    const navigate = useNavigate();

    const handleCreateRecord = async () => {
        await createRecord(newRecord);
        toast.success('New record created.', {
            duration: 1500,
        });
        setNewRecord({
            title: '',
            company: '',
            type: '',
            location: '',
            salary: '',
            link: '',
            description: '',
        });
        navigate('/');
    };

    return (
        <div className='w-full max-w-6xl mx-auto mt-8 bg-zinc-400 rounded-lg shadow-lg p-4'>
            <h1 className='text-3xl sm:text-4xl text-zinc-950 text-center font-bold mb-4'>Create a new record</h1>
            <form className='bg-zinc-950 rounded-lg shadow-lg p-4 space-y-6'>
                <div className='flex flex-col md:flex-row justify-center gap-6'>
                    <div className='w-full'>
                        <label className='text-amber-500 block'>Job Title</label>
                        <input 
                            type='text' 
                            placeholder='Job title'
                            value={newRecord.title}
                            onChange={(e) => setNewRecord({...newRecord, title: e.target.value})}
                            className='w-full placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-2 px-3 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg'
                        />
                    </div>
                    <div className='w-full'>
                        <label className='text-amber-500 block'>Job Company</label>
                        <input 
                            type='text' 
                            placeholder='Job company'
                            value={newRecord.company}
                            onChange={(e) => setNewRecord({...newRecord, company: e.target.value})}
                            className='w-full placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-2 px-3 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                        />
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center gap-6'>
                    <div className='w-full'>
                        <label className='text-amber-500 block'>Job Type</label>
                        <input
                            value={newRecord.type}
                            onChange={(e) => setNewRecord({...newRecord, type: e.target.value})}
                            type='text' 
                            placeholder='Job type'
                            className='w-full placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-2 px-3 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                        />
                    </div>
                    <div className='w-full'>
                        <label className='text-amber-500 block'>Job Location</label>
                        <input 
                            type='text' 
                            placeholder='Job location'
                            value={newRecord.location}
                            onChange={(e) => setNewRecord({...newRecord, location: e.target.value})}
                            className='w-full placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-2 px-3 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                        />
                    </div>
                    <div className='w-full'>
                        <label className='text-amber-500 block'>Job Salary</label>
                        <input 
                            type='number' 
                            placeholder='$00000/yr'
                            value={newRecord.salary}
                            onChange={(e) => setNewRecord({...newRecord, salary: e.target.value})}
                            className='w-full placeholder:text-zinc-500 border-2 border-amber-500 opacity-75 py-2 px-3 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                        />
                    </div>
                </div>
                <div className='w-full'>
                    <label className='text-amber-500 block'>Job Link</label>
                    <input 
                        type='text'
                        placeholder='Job link'
                        maxLength={250}
                        value={newRecord.link}
                        onChange={(e) => setNewRecord({...newRecord, link: e.target.value})}
                        className='w-full resize-none placeholder:text-zinc-500 placeholder:text-center placeholder:my-auto border-2 border-amber-500 py-2 px-3 opacity-75 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                    />
                </div>
                <div className='w-full'>
                    <label className='text-amber-500 block'>Job Description</label>
                    <input 
                        placeholder='Job description'
                        maxLength={5000}
                        value={newRecord.description}
                        onChange={(e) => setNewRecord({...newRecord, description: e.target.value})}
                        className='w-full h-40 resize-none placeholder:text-zinc-500 placeholder:text-center border-2 border-amber-500 py-2 px-3 opacity-75 focus:outline-none focus:opacity-100 transition-all text-zinc-500 rounded-lg' 
                    />
                </div>
                <div className='text-center'>
                    <button onClick={handleCreateRecord} type='button' className='border-2 border-emerald-500 text-emerald-500 py-2 px-4 font-bold text-lg rounded-lg hover:bg-emerald-500 hover:text-zinc-950 hover:scale-110 transition-all'>Create</button>
                </div>
            </form>
        </div>
    );
};

export default CreatePage;
