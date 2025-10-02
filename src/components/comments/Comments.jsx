import React from 'react';
import { useLoaderData } from 'react-router';
import Comment from '../comment/Comment';

const Comments = () => {
    const comments = useLoaderData();
    // console.log(comments)
    return (
        <div className='max-w-[800px] mx-auto mt-5'>
            <h1>This is Comments section container components-{comments.length}</h1>
            <div className='grid grid-cols-2 gap-5'> 
                {
                    comments.map(comment => <Comment comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;