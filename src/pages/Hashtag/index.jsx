import React from 'react';
import Card from './Card';

export default function Hashtag() {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='md:flex flex-row items-center md:justify-between mb-10'>
                <h1 className='text-2xl font-medium m-3'>XX 회원님의 관심사에 기반한 맞춤 공고에요</h1>
                <button className='m-4'>관심사 설정</button>
            </div>
            <ul className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
                <Card />
                <Card />
                <Card />
            </ul>
        </div>
    );
}

