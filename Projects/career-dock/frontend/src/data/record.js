// import {create} from 'zustand';

// export const useRecordData = create((set) => ({records: [], 
//     setRecords: (records) => set({records}),
//     createRecord: async (newRecord) => {
//         if (!newRecord.title || !newRecord.company || !newRecord.location || !newRecord.salary) {
//             return {success: false, message: 'Please provide all required fields.'};
//         }

//         const res = await fetch('/api/records', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newRecord),
//         });

//         const data = await res.json();
//         set((state) => ({records: [...state.records, data.data]}));
//         return {success: true, message: 'Record created successfully.'};
//     },
//     fetchRecords: async () => {
//         const res = await fetch('/api/records');
//         const data = await res.json();
//         set({records: data.data});
//     },
// }));

import { useState, useCallback } from 'react';

export const useRecordData = () => {
    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(false);

    // const fetchRecords = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch('/api/records');
    //         const data = await response.json();
    //         if (data.success) {
    //             setRecords(data.data);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     setLoading(false);
    // };

    const fetchRecords = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/records');
            const data = await response.json();
            if (data.success) {
                setRecords(data.data);
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }, []);

    const createRecord = async (record) => {
        const response = await fetch('/api/records', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(record),
        });
        const data = await response.json();
        if (data.success) fetchRecords();
        return data;
    };

    const deleteRecord = async (id) => {
        const response = await fetch(`/api/records/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        if (data.success) await fetchRecords(); // Refresh list after deletion
        return data;
    };

    // const deleteRecord = useCallback(async (id) => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch(`/api/records/${id}`, {
    //             method: 'DELETE',
    //         });
    //         const data = await response.json();
    //         if (data.success) {
    //             await fetchRecords();
    //         }
    //         return data;
    //     } catch (error) {
    //         console.error(error);
    //     }
    //     setLoading(false);
    // }, [fetchRecords]);

    const updateRecord = async (id, updatedData) => {
        const response = await fetch(`/api/records/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedData),
        });

        const data = await response.json();
        if (data.success) {
            fetchRecords();
        }
    };

    return { fetchRecords, createRecord, deleteRecord, updateRecord, records, loading };
};