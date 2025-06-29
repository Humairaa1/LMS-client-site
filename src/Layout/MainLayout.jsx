import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar/Navbar'
import Footer from '../shared/Footer/Footer'
import { ToastContainer } from 'react-toastify'

export default function MainLayout() {
    return (
        <div className='roboto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
             <ToastContainer />
        </div>
    )
}
