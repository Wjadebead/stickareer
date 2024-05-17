import React from 'react';

export default function Info({idx, title, detail, startDate, endDate}) {
    return (
        <div className='flex xl:flex mx-auto px-3 justify-between items-center border-black border-2 h-24 w-3/5'>
            <div className='flex text-3xl'>
                <h1 className='w-10'>{idx}</h1>
                <h1 className='w-full'>{title}</h1>
            </div>
            <div className=''>
                {date}
            </div>
        </div>
    );
}

