import React, { Suspense, useState } from 'react';
import CommentDetails from '../CommentDetails/CommentDetails';
const Comment = ({comment}) => {
    // console.log(comment)
    const [showInfo, setShowInfo] = useState(false);

    const commentPromise = fetch(`https://jsonplaceholder.typicode.com/comments/${comment.id}`)
    .then(res => res.json());

    return (
        <div className='text-center border-2 border-amber-200 rounded-2xl mt-4 p-5'>
            <h1>Title: {comment.name}</h1>
              
            <button onClick={()=>setShowInfo(!showInfo)} className='btn mt-5'>{showInfo?'Hide':'Show'} Info</button>
            {
                showInfo &&   <Suspense fallback={<p>Loading...</p>}> 
                    <CommentDetails commentPromise={commentPromise}></CommentDetails>
                </Suspense>
            }
        </div>
    );
};

export default Comment;