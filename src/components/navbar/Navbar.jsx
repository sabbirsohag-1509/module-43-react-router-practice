import React from 'react';
import { NavLink } from 'react-router';


const Navbar = () => {
    
    return (
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <a className="btn btn-ghost text-xl">React Router</a>
          </div>

          <div className="navbar-center hidden lg:flex ">
            <nav className='flex gap-5 text-lg font-semibold'> 
                <NavLink to='/' className={({isActive})=> isActive?'text-white bg-indigo-600 px-3 py-2 rounded-lg':
                'text-gray-700 hover:text-indigo-600'} >Home</NavLink>

                <NavLink to='users' className={({isActive})=> isActive?'text-white bg-indigo-600 px-3 py-2 rounded-lg':
                'text-gray-700 hover:text-indigo-600'}>Users</NavLink>

                <NavLink to='posts' className={({isActive})=> isActive?'text-white bg-indigo-600 px-3 py-2 rounded-lg':
                'text-gray-700 hover:text-indigo-600'}>Posts</NavLink>

                <NavLink to='comments' className={({isActive})=> isActive?'text-white bg-indigo-600 px-3 py-2 rounded-lg':
                'text-gray-700 hover:text-indigo-600'}>Comments</NavLink>

                <NavLink to='about' className={({isActive})=> isActive?'text-white bg-indigo-600 px-3 py-2 rounded-lg':
                'text-gray-700 hover:text-indigo-600'}>About</NavLink>
            </nav>
          </div>

          <div className="navbar-end">
            <a className="btn">Log In</a>
          </div>
</div>
    );
};

export default Navbar;