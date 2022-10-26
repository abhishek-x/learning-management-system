import React from 'react';
import { Link, Outlet } from "react-router-dom";

import { HiAcademicCap, HiOutlineHome, HiOutlineBriefcase, HiOutlineChat, HiOutlineChartSquareBar, HiOutlineCalendar, HiOutlineCog, HiOutlineXCircle } from "react-icons/hi";
import './stylesheets/Sidebar.css';

const Sidebar = () => {



    return (
        <div className='sidebar'>
            
            <div className='sidebar__logo'>
                <HiAcademicCap className='sidebar__logo-img' />
                <div className='sidebar__logo-title'>Academia</div>
            </div>

            <div className='sidebar__links'>

                <Link to="/dashboard" className='sidebar__link'>
                    <HiOutlineHome className='sidebar__link-img' />
                    <div className='sidebar__link-title'>Dashboard</div>
                </Link>

                <Link to="/courses" className='sidebar__link'>
                    <HiOutlineBriefcase className='sidebar__link-img' />
                    <div className='sidebar__link-title'>Courses</div>
                </Link>

                <div className='sidebar__link'>
                    <HiOutlineChat className='sidebar__link-img' />
                    <div className='sidebar__link-title'>Chats</div>
                </div>
                <div className='sidebar__link'>
                    <HiOutlineChartSquareBar className='sidebar__link-img' />
                    <div className='sidebar__link-title'>Grades</div>
                </div>
                <div className='sidebar__link'>
                    <HiOutlineCalendar className='sidebar__link-img' />
                    <div className='sidebar__link-title'>Schedule</div>
                </div>
                <div className='sidebar__link'>
                    <HiOutlineCog className='sidebar__link-img' />
                    <div className='sidebar__link-title'>Settings</div>
                </div>

            </div>

            <div className='sidebar__btn'>
                <HiOutlineXCircle className='sidebar__btn-img' />
                <div className='sidebar__btn-title'>Sign Out</div>
            </div>

            <Outlet />

        </div >
    )
}

export default Sidebar