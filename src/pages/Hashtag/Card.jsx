import React from 'react';

export default function Card({ title, detail }) {
    return (
        <li className='h-64 border-2 border-black rounded-md flex-col hover:bg-gray-100 hover:cursor-pointer transition-all'>
            <div className='mx-auto h-2/5 table'>
                <h1 className='table-cell align-middle text-center text-4xl truncate'>{title}</h1>
            </div>
            <div className='mx-auto my-3 w-5/6 rounded-md bg-gray-300'>
                <h2 className='text-center'>{detail}</h2>
            </div>
            <div className='mx-auto my-3 w-5/6 rounded-md bg-gray-300'>
                <h2 className='text-center'>{detail}</h2>
            </div>
            <div className='mx-auto my-3 w-5/6 rounded-md bg-gray-300'>
                <h2 className='text-center'>{detail}</h2>
            </div>
        </li>
    );
}

