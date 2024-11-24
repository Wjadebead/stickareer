import React, { useEffect, useState } from 'react';
import Card from './Card';
import hashtagDummy from './../../api/Hashtag/hashtagDummy';
import { useQuery } from '@tanstack/react-query';
import CardLoading from './CardLoading';
import { useAtomValue } from 'jotai';
import { authAtom, userNameAtom } from '../../stores/Login/auth';
import { selectedCompanyAtom, selectedLanguagesAtom } from '../../stores/user';
import { Link } from 'react-router-dom';

export default function Hashtag() {

    const [interest, setInterest] = useState([]);

    const userName = useAtomValue(userNameAtom);
    const selectedCompanies = useAtomValue(selectedCompanyAtom);
    const selectedLanguages = useAtomValue(selectedLanguagesAtom);

    const {isLoading, error, data: hashtags} = useQuery({
        queryKey: ['hashtags', interest],
        queryFn: () => {
            const hashtag = new hashtagDummy();
            return hashtag.hashtagInit();
        }
    });

    useEffect(() => {
        if (userName === null){

        }
    });

    // 필터링된 정보를 반환하는 함수
    const filteredHashtags = () => {
        if (!hashtags) return [];
        return hashtags.filter(hashtag => {
            const companyMatch = selectedCompanies.length === 0 || selectedCompanies.some(company => hashtag.detail.includes(company));
            const languageMatch = selectedLanguages.length === 0 || selectedLanguages.some(language => hashtag.detail.includes(language));
            return companyMatch && languageMatch;
        });
    };

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='md:flex flex-row items-center md:justify-between mb-10 border rounded-3xl border-stone-500'>
                {
                userName === null ? 
                (<h1 className='text-2xl font-medium m-3 p-2 '>맞춤 공고를 확인하시려면 로그인해주세요</h1>)
                :
                (<>
                <h1 className='text-2xl font-medium m-3 p-2 '>{userName} 회원님의 관심사에 기반한 맞춤 공고에요</h1>
                <Link to='/join/interests' className='m-4'>관심사 설정</Link>
                </>)
                }
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
                    filteredHashtags().map(hashtag => {
                        return <Card key={hashtag.id} title={hashtag.title} detail={hashtag.detail} />
                    })
                }
            </ul>
        </div>
    );
}
