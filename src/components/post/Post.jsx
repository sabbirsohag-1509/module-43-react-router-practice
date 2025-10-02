import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    // console.log(post) 
    return (
        <div className='text-center border-2 border-amber-200 rounded-2xl mt-4 p-5'>
            <h1 className='text-xl'>Id: {post.id}</h1> 
            <h1 className='text-2xl font-semibold'>Title: {post.title}</h1>
             
             <Link to={`${post.id}`}> 
               <button className='btn mt-2'>View Info</button>
              </Link>
        </div>
    );
};

export default Post;