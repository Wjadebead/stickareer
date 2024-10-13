import React from 'react';

export default function PersonalCard({ id, name, group }) {
    return (
        <li className='h-64 border-2 border-myborder shadow-lg dark:border-gray-500 rounded-md flex-col'>
            <div className='mx-auto h-2/5 table'>
                <h1 className='table-cell align-middle text-center text-3xl'>개인 정보</h1>
            </div>
            <div className='flex'>
                <div className='flex justify-center items-center w-2/5'>
                    <img className='rounded-full w-2/3 dark:bg-slate-200' src='https://cdn-icons-png.flaticon.com/512/1372/1372643.png' />
                </div>
                <div className='flex-col mx-auto my-auto'>
                    <div className='mx-auto my-3 px-3 rounded-md bg-gray-100 dark:bg-slate-600'>
                        <h2 className='text-center'>{name}</h2>
                    </div>
                    <div className='mx-auto my-3 px-3 rounded-md bg-gray-100 dark:bg-slate-600'>
                        <h2 className='text-center'>{id}</h2>
                    </div>
                    <div className='mx-auto my-3 px-3 rounded-md bg-gray-100 dark:bg-slate-600'>
                        <h2 className='text-center'>{group}</h2>
                    </div>
                </div>
            </div>
        </li>
    );
}

