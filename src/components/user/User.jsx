import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    // console.log(user)
    const {name, phone} = user;
    return (
        <div className= ' border-2 border-yellow-300 rounded-2xl text-center w-72 h-auto'>
            <h1 className='text-2xl py-3 font-semibold'>{name}</h1>
            <p className='text-sm'>{phone}</p>
            <Link to={`${user.id}`}> 
                <button className='btn mt-3'>Show Details</button>
            </Link>
        </div>
    );
};

export default User;