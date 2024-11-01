import React from 'react';

export default function WithdrawalPage() {
    return (
        <div className='flex flex-col items-center justify-center mx-auto'>
            <h1 className='text-2xl font-semibold'>
                정말로 탈퇴하시겠습니까?
            </h1>
            <button className='rounded-md m-10 p-4 shadow-md w-20 h-10 flex justify-center items-center bg-sky-200 dark:bg-slate-700'>
                탈퇴
            </button>
        </div>
    );
}

