import React from 'react'
import logo from '../../assets/logo.png'    

export default function Navbar() {

    const navItems = <>
        <li>Home</li>
        <li>About</li>
        <li>Thesis</li>
        <li>Journal</li>
        <li>Information</li>
        <li>Help</li>
        <li>Librarian</li>
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
                <ul className="menu menu-horizontal px-1 space-x-5">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    )
}
