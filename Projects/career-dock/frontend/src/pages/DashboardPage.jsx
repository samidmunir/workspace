// import { useRecordData } from '../data/record.js';
// import { useEffect } from 'react';

// const DashboardPage = () => {
//     const { fetchRecords, records } = useRecordData();

//     useEffect(() => {
//         fetchRecords();
//     }, [fetchRecords]);

//     const total = records.length;
//     const avgSalary = total > 0 ? Math.round(records.reduce((acc, r) => acc + r.salary, 0) / total) : 0;

//     const typeCount = {};
//     const companyCount = {};

//     records.forEach((rec) => {
//         typeCount[rec.type] = (typeCount[rec.type] || 0) + 1;
//         companyCount[rec.company] = (companyCount[rec.company] || 0) + 1;
//     });

//     const topCompanies = Object.entries(companyCount)
//         .sort((a, b) => b[1] - a[1])
//         .slice(0, 3);

//     return (
//         <div className='w-full max-w-5xl mx-auto mt-8 p-6 bg-zinc-900 text-white rounded-lg shadow-lg'>
//             <h1 className='text-4xl font-bold text-amber-500 text-center mb-6'>Dashboard</h1>
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center'>
//                 <div className='bg-zinc-800 p-4 rounded-lg shadow'>
//                     <h2 className='text-2xl font-semibold'>Total Records</h2>
//                     <p className='text-3xl text-emerald-500'>{total}</p>
//                 </div>
//                 <div className='bg-zinc-800 p-4 rounded-lg shadow'>
//                     <h2 className='text-2xl font-semibold'>Average Salary</h2>
//                     <p className='text-3xl text-sky-500'>${avgSalary}</p>
//                 </div>
//                 <div className='bg-zinc-800 p-4 rounded-lg shadow'>
//                     <h2 className='text-2xl font-semibold'>Job Types</h2>
//                     {
//                         Object.entries(typeCount).map(([type, count]) => (
//                             <p key={type} className='text-sm'>{type}: <span className='text-amber-500'>{count}</span></p>
//                         ))
//                     }
//                 </div>
//             </div>
//             <div className='mt-8 bg-zinc-800 p-4 rounded-lg shadow'>
//                 <h2 className='text-2xl font-semibold text-center mb-2'>Top Companies</h2>
//                 {
//                     topCompanies.map(([company, count]) => (
//                         <p key={company} className='text-center'>{company}: <span className='text-emerald-500'>{count}</span></p>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

// export default DashboardPage;

import { useRecordData } from '../data/record.js';
import { useEffect } from 'react';
import {
    PieChart, Pie, Cell,
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LineChart, Line, CartesianGrid, Legend
} from 'recharts';

const COLORS = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#ef4444'];

const DashboardPage = () => {
    const { fetchRecords, records } = useRecordData();

    useEffect(() => {
        fetchRecords();
    }, [fetchRecords]);

    const total = records.length;
    const avgSalary = total > 0 ? Math.round(records.reduce((acc, r) => acc + r.salary, 0) / total) : 0;

    const typeCount = {};
    const companyCount = {};
    const locationCount = {};
    const salaryRanges = {
        '<50k': 0,
        '50k-100k': 0,
        '100k-150k': 0,
        '150k+': 0
    };
    const createdByMonth = {};
    const salaryByType = {};

    records.forEach((rec) => {
        typeCount[rec.type] = (typeCount[rec.type] || 0) + 1;
        companyCount[rec.company] = (companyCount[rec.company] || 0) + 1;
        locationCount[rec.location] = (locationCount[rec.location] || 0) + 1;

        const salary = rec.salary;
        if (salary < 50000) salaryRanges['<50k']++;
        else if (salary < 100000) salaryRanges['50k-100k']++;
        else if (salary < 150000) salaryRanges['100k-150k']++;
        else salaryRanges['150k+']++;

        const month = new Date(rec.createdAt).toLocaleString('default', { month: 'short', year: 'numeric' });
        createdByMonth[month] = (createdByMonth[month] || 0) + 1;

        if (!salaryByType[rec.type]) salaryByType[rec.type] = { total: 0, count: 0 };
        salaryByType[rec.type].total += rec.salary;
        salaryByType[rec.type].count++;
    });

    const topCompanies = Object.entries(companyCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

    const pieJobTypeData = Object.entries(typeCount).map(([name, value]) => ({ name, value }));
    const pieLocationData = Object.entries(locationCount).map(([name, value]) => ({ name, value }));
    const barSalaryRanges = Object.entries(salaryRanges).map(([range, count]) => ({ range, count }));
    const lineRecordsByMonth = Object.entries(createdByMonth).map(([month, count]) => ({ month, count }));
    const barAvgSalaryByType = Object.entries(salaryByType).map(([type, { total, count }]) => ({ type, avg: Math.round(total / count) }));

    return (
        <div className='w-full max-w-6xl mx-auto mt-8 p-6 bg-zinc-900 text-white rounded-lg shadow-lg'>
            <h1 className='text-4xl font-bold text-amber-500 text-center mb-6'>Dashboard</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center'>
                <div className='bg-zinc-800 p-4 rounded-lg shadow'>
                    <h2 className='text-2xl font-semibold'>Total Records</h2>
                    <p className='text-3xl text-emerald-500'>{total}</p>
                </div>
                <div className='bg-zinc-800 p-4 rounded-lg shadow'>
                    <h2 className='text-2xl font-semibold'>Average Salary</h2>
                    <p className='text-3xl text-sky-500'>${avgSalary}</p>
                </div>
                <div className='bg-zinc-800 p-4 rounded-lg shadow'>
                    <h2 className='text-2xl font-semibold'>Job Types</h2>
                    {Object.entries(typeCount).map(([type, count]) => (
                        <p key={type} className='text-sm'>{type}: <span className='text-amber-500'>{count}</span></p>
                    ))}
                </div>
            </div>

            <div className='mt-8 bg-zinc-800 p-4 rounded-lg shadow'>
                <h2 className='text-2xl font-semibold text-center mb-2'>Top Companies</h2>
                {topCompanies.map(([company, count]) => (
                    <p key={company} className='text-center'>{company}: <span className='text-emerald-500'>{count}</span></p>
                ))}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
                <div className='bg-zinc-800 p-4 rounded-lg shadow'>
                    <h2 className='text-xl font-semibold text-center mb-2'>Job Type Distribution</h2>
                    <ResponsiveContainer width='100%' height={250}>
                        <PieChart>
                            <Pie data={pieJobTypeData} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={80} label>
                                {pieJobTypeData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='bg-zinc-800 p-4 rounded-lg shadow'>
                    <h2 className='text-xl font-semibold text-center mb-2'>Location Distribution</h2>
                    <ResponsiveContainer width='100%' height={250}>
                        <PieChart>
                            <Pie data={pieLocationData} dataKey='value' nameKey='name' cx='50%' cy='50%' outerRadius={80} label>
                                {pieLocationData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                <div className='bg-zinc-800 p-4 rounded-lg shadow'>
                    <h2 className='text-xl font-semibold text-center mb-2'>Salary Range Breakdown</h2>
                    <ResponsiveContainer width='100%' height={250}>
                        <BarChart data={barSalaryRanges}>
                            <XAxis dataKey='range' />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey='count' fill='#f59e0b' />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className='bg-zinc-800 p-4 rounded-lg shadow'>
                    <h2 className='text-xl font-semibold text-center mb-2'>Records Over Time</h2>
                    <ResponsiveContainer width='100%' height={250}>
                        <LineChart data={lineRecordsByMonth}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='month' />
                            <YAxis allowDecimals={false} />
                            <Tooltip />
                            <Legend />
                            <Line type='monotone' dataKey='count' stroke='#10b981' strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className='bg-zinc-800 p-4 rounded-lg shadow'>
                    <h2 className='text-xl font-semibold text-center mb-2'>Avg Salary by Job Type</h2>
                    <ResponsiveContainer width='100%' height={250}>
                        <BarChart data={barAvgSalaryByType}>
                            <XAxis dataKey='type' />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey='avg' fill='#3b82f6' />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
