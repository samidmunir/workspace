import { useEffect } from 'react';
import { useRecordData } from '../data/record.js';
import RecordCard from '../components/RecordCard.jsx';

const HomePage = () => {
    const {fetchRecords, records} = useRecordData();

    useEffect(() => {
        fetchRecords();
    }, [fetchRecords]);

    return (
        <div className='w-full px-4 sm:px-6 md:px-8 min-h-[550px] mx-auto mt-8 mb-8 bg-zinc-950 rounded-lg shadow-lg'>
            <div className='p-4 mx-auto'>
                <div className='p-4'>
                    <h1 className='text-4xl text-center font-bold text-zinc-500'>Current Records</h1>
                </div>
                {
                    records.length > 0 ? (
                        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6'>
                            {records.map((record) => 
                                <RecordCard 
                                    key={record._id} 
                                    id={record._id}
                                    title={record.title}
                                    company={record.company}
                                    location={record.location}
                                    type={record.type}
                                    salary={record.salary}
                                    link={record.link}
                                    description={record.description}
                                    status={record.status}
                                    createdAt={record.createdAt}
                                    updatedAt={record.updatedAt}
                                />
                            )}
                        </div>
                    ) : (
                        <div>
                            <p className='text-amber-500 text-center font-semibold text-xl'>No records found.</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HomePage;