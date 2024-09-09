import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import postDummy from '../../api/Community/postDummy';
import { useParams } from 'react-router-dom';
import { useAtom, useAtomValue } from 'jotai';
import { authAtom } from '../../stores/Login/auth';
import { CiCircleCheck } from "react-icons/ci";

export default function PostPage() {


    const {postno} = useParams();

    const {isLoading, error, data: content} = useQuery({
        queryKey: ['content'],
        queryFn: () => {
            const post = new postDummy();
            return post.postInit(postno);
        }
    }

    );

    const loginInfo = useAtomValue(authAtom);

    const [commentValue, setCommentValue] = useState("");
    const handleCommentInput = (e) => {
        setCommentValue(e.target.value);

    }
    
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='text-4xl my-5'>{content?.title}</h1>
            <div className='my-5 flex items-center'>
                <h2 className='m-4'>{content?.author}</h2>
                <h2>{content?.date}</h2>
            </div>
            <div className='text-xl'>{content?.content}</div>
            <hr className='mt-10' />
            {
                    content?.comment &&
                    content?.comment.map((c => {
                        return  <div className='flex items-center my-2'>
                                    <h3 className='w-1/6'>{c.author}</h3>
                                    <h3 className='w-3/6'>{c.content}</h3>
                                    <h3 className='w-2/6'>{c.date}</h3>
                                </div>
                }))
                    
            }
            {
                loginInfo ? 
                <>
                <hr className='m-3' />
                <div>
                {loginInfo}
                </div>
                <div className='lg:w-full w-full h-10 border rounded-3xl my-4 pl-1 border-stone-500 flex'>
                    <input type='text' value={commentValue} onChange={handleCommentInput} className='border-none rounded-3xl bg-transparent w-full'></input>
                    <button className='h-full w-12 border-l border-stone-500 flex justify-center items-center'><CiCircleCheck size="24" /></button>
                </div>
                </>
                :
                <>
                댓글을 남기시려면 로그인이 필요합니다.
                </>
            }

        </div>
    );
}

