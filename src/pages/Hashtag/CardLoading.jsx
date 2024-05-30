import React from 'react';

export default function CardLoading({  }) {
    return (
        <li className='h-64 border-2 border-myborder shadow-lg rounded-md flex-col animate-pulse'>
            <div className='mx-auto align-middle w-32 h-1/5 mt-7 rounded-md bg-gray-400' />
            <div className='mx-auto my-3 w-5/6 h-7 rounded-md bg-gray-300'>
                <h2 className='text-center'></h2>
            </div>
            <div className='mx-auto my-3 w-5/6 h-7 rounded-md bg-gray-300'>
                <h2 className='text-center'></h2>
            </div>
            <div className='mx-auto my-3 w-5/6 h-7 rounded-md bg-gray-300'>
                <h2 className='text-center'></h2>
            </div>
        </li>
    );
}

