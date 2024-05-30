import { useQuery } from '@tanstack/react-query';
import React from 'react';
import postDummy from '../../api/Community/postDummy';
import { useParams } from 'react-router-dom';

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
    console.log(content);
    return (
        <div>
            <div>{content?.title}</div>
            <div>{content?.content}</div>
        </div>
    );
}

