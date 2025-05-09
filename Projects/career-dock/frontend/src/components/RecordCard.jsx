// import { useState } from 'react';
// import {MdEditSquare, MdDeleteForever, MdMoreHoriz} from 'react-icons/md';
// import EditModal from './EditModal.jsx';
// import DeleteConfirmModal from './ConfirmDelete.jsx';
// import { useRecordData } from '../data/record.js';
// import { AnimatePresence } from 'framer-motion';

// const RecordCard = (props) => {
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [showConfirm, setShowConfirm] = useState(false);

//     function trimRecordDescription(description) {
//         if (description.length > 42) {
//             return description.slice(0, 42) + '...';
//         } else {
//             return description;
//         }
//     };

//     const handleEdit = () => {
//         setShowEditModal(!showEditModal);
//     };

//     const { deleteRecord } = useRecordData();

//     const confirmDelete = async () => {
//         const { success, message } = await deleteRecord(props.id);
//         if (!success) {
//             console.log(`Error deleting record: ${message}`);
//         }
//         setShowConfirm(false);
//     };

//     return (
//         <>
//             <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-xs h-auto rounded-lg bg-zinc-400 shadow-xl hover:border-amber-500 hover:scale-105 transition-all cursor-default border-2 border-zinc-950 m-auto'>
//                 <div className='flex justify-between items-center p-4'>
//                     <p className='text-2xl truncate'>{props.title}</p>
//                     <p className='text-xl font-semibold truncate'>{props.company}</p>
//                 </div>
//                 <div className='flex justify-between items-center bg-zinc-950 p-4 text-amber-500 text-sm sm:text-base'>
//                     <p>{props.type.toUpperCase()}</p>
//                     <p>{props.location}</p>
//                     <p>${props.salary}/yr</p>
//                 </div>
//                 <div className='p-2'>
//                     <p className='text-left truncate'><span className='font-semibold'>Notes:</span> {trimRecordDescription(props.description)}</p>
//                 </div>
//                 <div className='bg-zinc-950 p-4 flex flex-wrap justify-evenly gap-2 opacity-75 hover:opacity-100 transition-all'>
//                     <button className='border border-emerald-500 text-emerald-500 flex items-center gap-1 font-bold py-1 px-2 rounded-lg hover:bg-emerald-500 hover:text-zinc-950 transition-all'>View <MdMoreHoriz /></button>
//                     <button onClick={handleEdit} className='border border-amber-500 text-amber-500 flex items-center gap-1 font-bold py-1 px-2 rounded-lg hover:bg-amber-500 hover:text-zinc-950 transition-all'>Edit <MdEditSquare /></button>
//                     <button onClick={() => setShowConfirm(true)} className='border border-rose-500 text-rose-500 flex items-center gap-1 font-bold py-1 px-2 rounded-lg hover:bg-rose-500 hover:text-zinc-950 transition-all'>Delete<MdDeleteForever /></button>
//                 </div>
//                 <div className='text-xs tracking-tighter flex flex-col sm:flex-row justify-between items-center gap-2 p-4'>
//                     <p><span className='font-semibold'>Created at: </span>{new Date(props.createdAt).toDateString()}</p>
//                     <p><span className='font-semibold'>Updated: </span>{new Date(props.updatedAt).toDateString()}</p>
//                 </div>
//             </div>

//             {showEditModal && (
//                 <EditModal
//                     id={props.id}
//                     title={props.title}
//                     company={props.company}
//                     location={props.location}
//                     type={props.type}
//                     salary={props.salary}
//                     link={props.link}
//                     description={props.description}
//                     handleClose={handleEdit}
//                 />
//             )}

//             <AnimatePresence>
//                 {showConfirm && (
//                     <DeleteConfirmModal
//                         onCancel={() => setShowConfirm(false)}
//                         onConfirm={confirmDelete}
//                     />
//                 )}
//             </AnimatePresence>
//         </>
//     );
// };

// export default RecordCard;

import { useState } from 'react';
import {MdEditSquare, MdDeleteForever, MdMoreHoriz} from 'react-icons/md';
import EditModal from './EditModal.jsx';
import DeleteConfirmModal from './ConfirmDelete.jsx';
import { useRecordData } from '../data/record.js';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const RecordCard = (props) => {

    const navigate = useNavigate();

    const [showEditModal, setShowEditModal] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    function trimRecordDescription(description) {
        return description.length > 42 ? description.slice(0, 42) + '...' : description;
    }

    const handleEdit = () => setShowEditModal(!showEditModal);
    const { deleteRecord } = useRecordData();

    const confirmDelete = async () => {
        const { success, message } = await deleteRecord(props.id);
        if (!success) {
            console.log(`Error deleting record: ${message}`);
        } else {
            props.onDeleteSuccess?.();
        }
        setShowConfirm(false);
    };

    const createdAt = new Date(props.createdAt);
    const updatedAt = new Date(props.updatedAt);
    const msDiff = updatedAt - createdAt;
    const dayDiff = msDiff / (1000 * 60 * 60 * 24);
    const showUpdated = msDiff > 1000; // at least 1 second newer

    const formatDate = (date) => date.toDateString();
    const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <>
            <div className='w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-xs h-auto rounded-lg bg-zinc-400 shadow-xl hover:border-amber-500 hover:scale-105 transition-all cursor-default border-2 border-zinc-950 m-auto'>
                <div className='flex justify-between items-center p-4'>
                    <p className='text-2xl truncate'>{props.title}</p>
                    <p className='text-xl font-semibold truncate'>{props.company}</p>
                </div>
                <div className='flex justify-between items-center bg-zinc-950 p-4 text-amber-500 text-sm sm:text-base'>
                    <p>{props.type.toUpperCase()}</p>
                    <p>{props.location}</p>
                    <p>${props.salary.toString().slice(0, 3)}K</p>
                </div>
                <div className='p-2'>
                    <p className='text-left truncate'><span className='font-semibold'>Notes:</span> {trimRecordDescription(props.description)}</p>
                </div>
                <div className='bg-zinc-950 p-4 flex flex-wrap justify-evenly gap-2 opacity-75 hover:opacity-100 transition-all'>
                    <button onClick={() => navigate(`/record/${props.id}`)} className='border border-emerald-500 text-emerald-500 flex items-center gap-1 font-bold py-1 px-2 rounded-lg hover:bg-emerald-500 hover:text-zinc-950 transition-all'>View <MdMoreHoriz /></button>
                    <button onClick={handleEdit} className='border border-amber-500 text-amber-500 flex items-center gap-1 font-bold py-1 px-2 rounded-lg hover:bg-amber-500 hover:text-zinc-950 transition-all'>Edit <MdEditSquare /></button>
                    <button onClick={() => setShowConfirm(true)} className='border border-rose-500 text-rose-500 flex items-center gap-1 font-bold py-1 px-2 rounded-lg hover:bg-rose-500 hover:text-zinc-950 transition-all'>Delete<MdDeleteForever /></button>
                </div>
                <div className='text-xs tracking-tighter flex flex-col sm:flex-row justify-between items-center gap-2 p-4'>
                    <p><span className='font-semibold'>Created:</span> {dayDiff < 1 ? formatTime(createdAt) : formatDate(createdAt)}</p>
                    {showUpdated && (
                        <p><span className='font-semibold'>Updated:</span> {dayDiff < 1 ? formatTime(updatedAt) : formatDate(updatedAt)}</p>
                    )}
                </div>
            </div>

            {showEditModal && (
                <EditModal
                    id={props.id}
                    title={props.title}
                    company={props.company}
                    location={props.location}
                    type={props.type}
                    salary={props.salary}
                    link={props.link}
                    description={props.description}
                    handleClose={handleEdit}
                />
            )}

            <AnimatePresence>
                {showConfirm && (
                    <DeleteConfirmModal
                        onCancel={() => setShowConfirm(false)}
                        onConfirm={confirmDelete}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

export default RecordCard;
