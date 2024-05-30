import React from 'react';

export default function InterestCard() {
    return (
        <li className='h-64 border-2 border-myborder shadow-lg dark:border-gray-500 rounded-md flex-col'>
            <div className='mx-auto h-2/5 table'>
                <h1 className='table-cell align-middle text-center text-3xl'>관심사 설정</h1>
            </div>
            <div className='flex'>
                <div className='flex-col mx-auto my-auto'>
                    <div className='mx-auto my-3 px-3 rounded-md bg-gray-100'>
                        <h2 className='text-center'>{}</h2>
                    </div>
                    <div className='mx-auto my-3 px-3 rounded-md bg-gray-100'>
                        <h2 className='text-center'>{}</h2>
                    </div>
                    <div className='mx-auto my-3 px-3 rounded-md bg-gray-100'>
                        <h2 className='text-center'>{}</h2>
                    </div>
                </div>
            </div>
        </li>
    );
}

