import React, { useState } from 'react';
import Post from './post';

export default function Community() {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='lg:w-1/2 w-2/3 h-10 border rounded-3xl mb-16 pl-1 border-stone-500 flex'>
                    <input type='text' value={searchValue} onChange={handleSearchInput} className='border-none rounded-3xl bg-transparent w-full'></input>
                    <button className='h-full w-12 border-l border-stone-500'>검색</button>
                </div>
                <div className='w-full flex-col justify-center items-center'>
                    <Post idx={1} title={"글입니다"} date={"2024.05.03"}/>
                </div>
            </div>
        </>
    );
}

