import React from 'react';

export default function JoinPage() {
    return (
        <div className='flex flex-col items-center justify-center mx-auto'>
            <h1 className='text-3xl font-semibold xl:inline'>
            <h1 className='title text-brand xl:inline'>STICKareer</h1>에 오신것을 환영합니다!
            </h1>
            <button className='rounded-md m-10 p-4 shadow-md w-40 h-15 flex justify-center items-center transition-all bg-green-200 hover:bg-sky-200 dark:bg-slate-700 dark:hover:bg-slate-500'>
                시작하기
            </button>
        </div>
    );
}

