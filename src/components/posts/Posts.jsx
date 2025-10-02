import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../post/Post';

const Posts = () => {
    const posts = useLoaderData();
    // console.log(posts); 
    return (
        <div className='max-w-[800px] mx-auto mt-5'>
            <h1>This is Posts section container-{posts.length}</h1>
            <div> 
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;