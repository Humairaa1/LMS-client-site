import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider'
import { toast } from 'react-toastify';
import UseBorrowBooks from '../../Hooks/UseBorrowBooks';

export default function Navbar() {

    const admin = true;

    const { user, logoutUser } = useContext(AuthContext);
    const [borrowedBooks] = UseBorrowBooks();
    // console.log(borrowedBooks.lenght);

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                console.log('Logout successful');
                toast.success('Logout successful');
            })
    }

    const navItems = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink>Thesis</NavLink></li>
        <li><NavLink>Journal</NavLink></li>
        {/* <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/information"}>Information</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li> */}
        <li><NavLink>Librarian</NavLink></li>
    </>

    return (
        <div>

            {/* topbar  */}
            <div className='flex justify-between items-center bg-gray-100 px-3 py-1'>
                <div className='flex items-center list-none font-semibold gap-3'>
                    <li><NavLink to={"/about"}>About</NavLink></li>
                    <li><NavLink to={"/information"}>Information</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact</NavLink></li>
                </div>

                <div>
                    {
                    admin ?
                    <Link to={'/dashboard'} className="font-semibold">Admin Dashboard</Link>
                    :
                    ""
                }
                </div>

                <div>
                    {
                        user ?
                            <div className='flex justify-between items-center gap-2 font-semibold'>
                                <span className='font-semibold'>{user.displayName}</span>
                                <Link to={'/request'} className="btn">
                                    Request <div className="badge badge-sm">+{borrowedBooks.length}</div>
                                </Link>
                            </div>
                            :
                           ""
                    }

                </div>
            </div>



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
                <div className="navbar-end gap-2">
                    {/* <button className="btn">
                        Request <div className="badge badge-sm">+{borrowedBooks.length}</div>
                    </button> */}
                    {
                        user ?
                            <button onClick={handleLogout} className='btn'>Logout</button>
                            :
                            <Link to={'/login'} className='btn btn-success text-white'>Login</Link>
                    }

                </div>
            </div>
        </div>
    )
}
