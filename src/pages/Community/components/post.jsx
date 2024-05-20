import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({idx, title, date}) {
    return (
        <Link to= {`/post/${idx}`}>
        <div className='flex xl:flex mx-auto mb-4 px-3 justify-between items-center hover:bg-gray-200 hover:cursor-pointer transition-all border-black border-2 rounded-md h-24 w-3/5'>
            <div className='flex text-3xl'>
                <h2 className='w-10'>{idx}</h2>
                <h1 className='w-full'>{title}</h1>
            </div>
            <div className=''>
                {date}
            </div>
        </div>
        </Link>
    );
}

