import React, { useState } from 'react';
import Post from './post';
import { useQuery } from '@tanstack/react-query';
import communityDummy from '../../api/Community/communityDummy';
import PostLoading from './postLoading';

export default function Community() {

    const [searchValue, setSearchValue] = useState("");

    const [currentPosts, setCurrentPosts] = useState([]);

    const handleSearchInput = (e) => {
        setSearchValue(e.target.value);
    }

    const {isLoading, error, data: posts} = useQuery({
        queryKey: ['posts', searchValue],
        queryFn: () => {
            const community = new communityDummy();
            return community.communityInit();
        }
    }
    );

    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div className='lg:w-1/2 w-2/3 h-10 border rounded-3xl mb-16 pl-1 border-stone-500 flex'>
                    <input type='text' value={searchValue} onChange={handleSearchInput} className='border-none rounded-3xl bg-transparent w-full'></input>
                    <button className='h-full w-12 border-l border-stone-500'>검색</button>
                </div>
                <div className='w-full flex-col justify-center items-center'>
                    {
                        isLoading &&
                        <>
                        <PostLoading />
                        <PostLoading />
                        <PostLoading />
                        <PostLoading />
                        <PostLoading />
                        </>
                    }
                    {
                        posts &&
                        posts.map((post => {
                            return <Post key={post.idx} idx={post.idx} title={post.title} date={post.date}/>
                    }))
                    
                    }
                </div>
            </div>
        </>
    );
}

