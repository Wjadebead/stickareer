import React from 'react';

export default function PostLoading({ }) {
    return (
        <div className='flex xl:flex mx-auto mb-4 px-3 justify-between items-center border-black border-2 h-24 w-3/5 animate-pulse'>
        <div class="flex items-center w-10">
            <div class="h-5 ms-1 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div class="flex items-center w-full">
            <div class="h-5 ms-1 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        <div class="flex items-center w-20">
            <div class="h-5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        </div>
        </div>
    );
}

