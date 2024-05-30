import React from 'react';
import personalDataDummy from '../../api/Mypage/personalDataDummy';
import { useQuery } from '@tanstack/react-query';
import PersonalCard from './Cards/PersonalCard';
import PointCard from './Cards/PointCard';
import InterestCard from './Cards/InterestCard';
import NotificationCard from './Cards/NotificationCard';
import BookmarkCard from './Cards/BookmarkCard';
import CardLoading from '../Hashtag/CardLoading';

export default function Mypage() {
    
    const {isLoading, error, data: personalData} = useQuery({
        queryKey: ['personalData'],
        queryFn: () => {
            const personalData = new personalDataDummy();
            return personalData.personalDataInit();
        }
    }
    );

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='md:flex flex-row items-center md:justify-between mb-10 border rounded-3xl border-stone-500'>
                <h1 className='text-2xl font-medium m-3 p-2 '>{personalData?.nickname} 회원님</h1>
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
                    personalData &&
                    <>
                        <PersonalCard nickname={personalData.nickname} name={personalData.name} group={personalData.group} />
                        <InterestCard />
                        <NotificationCard />
                        <BookmarkCard />
                        <PointCard currentPoint={personalData.point} />
                        <li className='h-64 border-2 border-myborder shadow-lg dark:border-gray-500 rounded-md flex-col'>
                            <div className='mx-auto h-2/5 table'>
                                <h1 className='table-cell align-middle text-center text-3xl'>회원 탈퇴</h1>
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
                    </>
                }
            </ul>
        </div>
    );
}

