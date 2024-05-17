import React, { useState } from 'react';
import Card from './Card';
import hashtagDummy from './../../api/Hashtag/hashtagDummy';
import { useQuery } from '@tanstack/react-query';
import CardLoading from './CardLoading';

export default function Hashtag() {

    const [interest, setInterest] = useState([]);
    
    const {isLoading, error, data: hashtags} = useQuery({
        queryKey: ['hashtags', interest],
        queryFn: () => {
            const hashtag = new hashtagDummy();
            return hashtag.hashtagInit();
        }
    }
    );

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='md:flex flex-row items-center md:justify-between mb-10 border rounded-3xl border-stone-500'>
                <h1 className='text-2xl font-medium m-3 p-2 '>XX 회원님의 관심사에 기반한 맞춤 공고에요</h1>
                <button className='m-4'>관심사 설정</button>
            </div>
            <ul className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
                {isLoading && 
                <>
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                    <CardLoading />
                </>
                }
                {
                    hashtags && hashtags.map(hashtag => {
                        return <Card key={hashtag.id} title={hashtag.title} detail={hashtag.detail} />
                    })
                }
            </ul>
        </div>
    );
}

