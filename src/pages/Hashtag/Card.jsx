import React from 'react';

export default function Card({ title, detail }) {
    return (
        <li className='h-64 border-2 border-myborder shadow-lg rounded-md flex-col hover:bg-gray-200 dark:hover:bg-slate-700 hover:cursor-pointer'>
            <div className='mx-auto h-2/5 table'>
                <h1 className='table-cell align-middle text-center text-4xl truncate'>{title}</h1>
            </div>
            <div className='mx-auto my-3 w-5/6 rounded-md bg-gray-100 dark:bg-slate-600'>
                <h2 className='text-center'>{detail}</h2>
            </div>
            <div className='mx-auto my-3 w-5/6 rounded-md bg-gray-100 dark:bg-slate-600'>
                <h2 className='text-center'>{detail}</h2>
            </div>
            <div className='mx-auto my-3 w-5/6 rounded-md bg-gray-100 dark:bg-slate-600'>
                <h2 className='text-center'>{detail}</h2>
            </div>
        </li>
    );
}

