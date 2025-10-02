import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    // console.log(post)
    const navigate = useNavigate();
    return (
        <div className='max-w-[800px] mx-auto mt-5 text-center border-2 border-amber-200 rounded-2xl h-72 p-5'>
              <h1 className='text-2xl font-bold'>Title: {post.title}</h1>
              <p className='py-4 text-lg '>Description- {post.body}</p>
              <button onClick={()=>navigate(-1)} className='btn mr-2 mt-5'>←Previous</button>
              <button onClick={()=>navigate('/')} className='btn ml-2 mt-5'>🏛Home</button>
        </div> 
    );
};

export default PostDetails;