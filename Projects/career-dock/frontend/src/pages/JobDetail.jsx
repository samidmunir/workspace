// pages/JobDetail.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useRecordData } from '../data/record.js';
import { useEffect, useState } from 'react';

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchRecords, records } = useRecordData();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    fetchRecords();
  }, [fetchRecords]);

  useEffect(() => {
    const found = records.find(r => r._id === id);
    if (found) setRecord(found);
  }, [records, id]);

  if (!record) {
    return <p className="text-center text-white mt-20">Loading record details...</p>;
  }

  const descriptionList = record.description?.split(', ') || [];

  const formatDate = (d) => new Date(d).toDateString();
  const formatTime = (d) => new Date(d).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-zinc-900 text-white rounded-lg shadow-lg">
      <button onClick={() => navigate('/')} className="mb-4 text-amber-400 hover:underline">&larr; Go Back</button>

      <h1 className="text-4xl font-bold text-amber-500 mb-2">{record.title}</h1>
      <h2 className="text-2xl text-zinc-300 font-semibold mb-4">{record.company}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-sm">
        <p><span className="font-semibold text-zinc-400">Location:</span> {record.location}</p>
        <p><span className="font-semibold text-zinc-400">Type:</span> {record.type}</p>
        <p><span className="font-semibold text-zinc-400">Salary:</span> ${record.salary}/yr</p>
        <p><span className="font-semibold text-zinc-400">Created:</span> {formatDate(record.createdAt)} at {formatTime(record.createdAt)}</p>
        {record.updatedAt !== record.createdAt && (
          <p><span className="font-semibold text-zinc-400">Updated:</span> {formatDate(record.updatedAt)} at {formatTime(record.updatedAt)}</p>
        )}
      </div>

      <div className="bg-zinc-800 rounded-lg p-4 shadow-inner">
        <h3 className="text-xl font-semibold text-emerald-400 mb-2">Job Description</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-zinc-300">
          {descriptionList.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDetail;
