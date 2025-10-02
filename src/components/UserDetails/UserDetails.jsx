import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);
    const navigate = useNavigate();
    const navigate2 = useNavigate();

    const backBtnHandleClick = () =>{
        navigate(-1);
    }
    const homeBtnHandleClick = () =>{
        navigate2('/');
    }
    return (
        <div className=' max-w-[800px] mx-auto mt-5 text-center border-2 border-yellow-300 rounded-2xl w-[450px] h-80'>
            <h1 className='text-2xl font-bold py-2'>Name- {user.name}</h1>
            <h1 className='text-xl font-semibold py-2'>User name: {user.username}</h1>
            <p className='text-xl py-2'>Email: {user.email}</p>
            <p className='text-lg py-2'>Address: {user.address.city}, {user.address.street}</p>
            <p className='text-sm py-2 font-semibold'>Work: {user.company.name}</p>
            <p className='text-sm py-2 font-semibold'>phone: {user.phone}</p>

            <button onClick={backBtnHandleClick} className='btn mt-3'>Back</button>
            <button onClick={homeBtnHandleClick} className='btn mt-3'>Visit Home</button>
        </div>
    );
};

export default UserDetails;