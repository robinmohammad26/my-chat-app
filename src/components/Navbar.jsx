import React from 'react';
import { FaChartLine, FaHome, FaRegClock } from 'react-icons/fa';
import { NavLink } from 'react-router';
import logoImg from '../assets/logo.png'

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink className={({ isActive }) => `${isActive ? 'bg-[#244D3F] text-white' : ''}`} to={'/'}><FaHome />Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => `${isActive ? 'bg-[#244D3F] text-white' : ''}`} to={'/timeline'}><FaRegClock />Timeline</NavLink></li>
                            <li><NavLink className={({ isActive }) => `${isActive ? 'bg-[#244D3F] text-white' : ''}`} to={'/status'}><FaChartLine />Status</NavLink></li>
                        </ul>
                    </div>
                    <div className='max-md:hidden'>
                        <img src={logoImg} alt="" />
                    </div>
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className={({ isActive }) => `${isActive ? 'bg-[#244D3F] text-white' : ''}`} to={'/'}><FaHome />Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? 'bg-[#244D3F] text-white' : ''}`} to={'/timeline'}><FaRegClock />Timeline</NavLink></li>
                        <li><NavLink className={({ isActive }) => `${isActive ? 'bg-[#244D3F] text-white' : ''}`} to={'/status'}><FaChartLine />Status</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;