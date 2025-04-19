import { useState } from 'react';
import {MdEditSquare, MdDeleteForever, MdMoreHoriz} from 'react-icons/md';
import EditModal from './EditModal.jsx';
import { useRecordData } from '../data/record.js';

const RecordCard = (props) => {
    const [showEditModal, setShowEditModal] = useState(false);

    function trimRecordDescription(description) {
        if (description.length > 42) {
            return description.slice(0, 42) + '...';
        } else {
            return description;
        }
    };

    const handleEdit = () => {
        setShowEditModal(!showEditModal);
        console.log(showEditModal);
    };

    const {deleteRecord} = useRecordData();

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete this record?')) {
            const {success, message} = await deleteRecord(props.id);

            if (!success) {
                console.log(`Error deleting record: ${message}`);
            }
        }
    };

    return (
        <>
            <div className='border-2 border-zinc-950 w-[400px] h-[275px] rounded-lg bg-zinc-400 shadow-xl hover:border-amber-500 hover:scale-105 transition-all cursor-default m-auto'>
                <div className='flex justify-between items-center p-4'>
                    <p className='text-2xl truncate'>{props.title}</p>
                    <p className='text-xl font-semibold truncate'>{props.company}</p>
                </div>
                <div className='flex justify-between items-center bg-zinc-950 p-4 text-amber-500'>
                    <p className=''>{props.type.toUpperCase()}</p>
                    <p className=''>{props.location}</p>
                    <p className=''>${props.salary}/yr</p>
                </div>
                <div className='p-2'>
                    <p className='text-left truncate'><span className='font-semibold'>Notes:</span> {trimRecordDescription(props.description)}</p>
                </div>
                <div className='bg-zinc-950 p-4 flex justify-evenly opacity-75 hover:opacity-100 transition-all'>
                    <button className='border-1 border-emerald-500 text-emerald-500 flex items-center gap-1 font-bold py-1 px-2 rounded-lg hover:bg-emerald-500 hover:text-zinc-950 transition-all cursor-default'>View <MdMoreHoriz /></button>
                    <button onClick={handleEdit} className='border-1 border-amber-500 text-amber-500 flex items-center gap-1 font-bold w-min py-1 px-2 rounded-lg hover:bg-amber-500 hover:text-zinc-950 transition-all cursor-default'>Edit <MdEditSquare /></button>
                    <button onClick={handleDelete} className='text-rose-500 border-1 border-rose-500 flex items-center gap-1 font-bold py-1 px-2 rounded-lg hover:bg-rose-500 hover:text-zinc-950 transition-all cursor-default'>Delete<MdDeleteForever /></button>
                </div>
                <div className='text-xs tracking-tighter flex justify-between items-center p-4'>
                    <p><span className='font-semibold'>Created at: </span>{new Date(props.createdAt).toDateString()}</p>
                    <p><span className='font-semibold'>Updated: </span>{new Date(props.updatedAt).toDateString()}</p>
                </div>
            </div>
            {showEditModal && <EditModal id={props.id} title={props.title} company={props.company} location={props.location} type={props.type} salary={props.salary} description={props.description} handleClose={handleEdit} />}
        </>
    );
};

export default RecordCard;