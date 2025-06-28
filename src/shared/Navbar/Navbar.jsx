import React from 'react'
import logo from '../../assets/logo.png'    
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    const navItems = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink>Thesis</NavLink></li>
        <li><NavLink>Journal</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/information"}>Information</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li><NavLink>Librarian</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-x-5">
                       {navItems}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-20' src={logo} alt="logo" />
                    <span className='text-xl font-bold ml-2'>Library</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg font-semibold px-1 space-x-2">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    )
}
