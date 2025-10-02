import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../user/User';

const users = () => {
    const users = useLoaderData();
    // console.log(users)
    return (
        <div className='max-w-[800px] mx-auto mt-5'>
            <div className='grid grid-cols-2 gap-10'> 
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default users;