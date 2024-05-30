import React from 'react';

export default function PostLoading({ }) {
    return (
        <div className='flex xl:flex mx-auto mb-4 px-3 justify-between items-center border-myborder shadow-lg border-2 rounded-md h-24 w-3/5 animate-pulse'>
        <div className="flex items-center w-full">
            <div className="h-5 ms-1 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        </div>
    );
}

