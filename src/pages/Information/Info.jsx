import React from 'react';

export default function Info({idx, title, detail, type, startDate, endDate}) {


    return (
        <div className='flex xl:flex mx-auto mb-4 px-1 md:px-3 justify-between items-center hover:bg-gray-200 hover:dark:bg-slate-600 hover:cursor-pointer transition-all border-myborder shadow-lg border-2 rounded-md h-24 md:w-3/5'>
            <div className='flex flex-col md:flex-row md:w-3/5 w-11/12 ml-2 md:items-center'>
                <h1 className='md:w-3/4 text-3xl'>{title}</h1>
                <h2 className='md:w-1/4'>{type}</h2>
            </div>
            <div className='w-4/12 md:w-auto'>
                {`${startDate} ~ ${endDate}`}
            </div>
        </div>
    );
}

