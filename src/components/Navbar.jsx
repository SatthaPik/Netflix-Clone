import React from 'react';
import logo from '../assets/img/NetflixLogo.png';
import { FaBell, FaSearch } from 'react-icons/fa';
import imgprofile from '../assets/img/profile.png';
function Navbar() {
  return (
    <head>
      <div className='flex items-center text-white md:space-x-10'>
        <img className='w-32' src={logo} alt='' />
        <ul className='md:flex space-x-10 hidden'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='#'>TV Shows</a>
          </li>
          <li>
            <a href='#'>Movies</a>
          </li>
          <li>
            <a href='#'>New & Popular</a>
          </li>
          <li>
            <a href='#'>My List</a>
          </li>
        </ul>
      </div>
      <div className='flex justify-center items-center space-x-6 text-white'>
        <FaSearch />
        <p>Kids</p>
        <FaBell />
        <img className='w-10 h-10 rounded-md' src={imgprofile} alt='' />
      </div>
    </head>
  );
}

export default Navbar;
