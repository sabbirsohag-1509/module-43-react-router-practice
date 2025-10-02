import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Sidebar from '../sidebar/Sidebar';

const Roots = () => {
  const navigation = useNavigation();
  const isNavigation = Boolean(navigation.location);
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex mt-5 ml-5'> 
        <Sidebar></Sidebar>

          {
            isNavigation && <span>Loading...</span>
          }

        <Outlet></Outlet> 
      </div>
      <footer> 
        <p className='text-center bg-gray-200 rounded-2xl text-xl font-semibold text-gray-400'>&copy; All Credit Reserved Sabbir Hossain Sohag &copy;</p>
      </footer>
    </div>
  );
};

export default Roots;
