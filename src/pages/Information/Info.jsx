import React from 'react';

export default function Info({idx, title, detail, type, startDate, endDate}) {


    return (
        <div className='flex xl:flex mx-auto mb-4 px-3 justify-between items-center hover:bg-gray-200 hover:dark:bg-slate-600 hover:cursor-pointer transition-all border-myborder shadow-lg border-2 rounded-md h-24 md:w-3/5'>
            <div className='flex w-3/5 ml-2 items-center'>
                <h1 className='w-3/4 text-3xl'>{title}</h1>
                <h2 className='w-1/4'>{type}</h2>
            </div>
            <div className=''>
                {`${startDate} ~ ${endDate}`}
            </div>
        </div>
    );
}

