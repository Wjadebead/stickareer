import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({idx, title, date}) {
    return (
        <Link to= {`/post/${idx}`}>
        <div className='flex xl:flex mx-auto mb-4 px-3 justify-between items-center hover:bg-gray-200 hover:dark:bg-slate-600 hover:cursor-pointer border-myborder shadow-lg border-2 rounded-md h-24 md:w-3/5'>
            <div className='flex flex-col mb-5 md:mb-0 md:flex-row text-3xl md:items-center'>
                <h2 className='md:w-10 text-base'>{idx}</h2>
                <h1 className='items-center md:w-full line-clamp-1'>{title}</h1>
            </div>
            <div className=''>
                {date}
            </div>
        </div>
        </Link>
    );
}

