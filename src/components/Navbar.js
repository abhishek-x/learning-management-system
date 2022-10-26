import React from 'react';
import './stylesheets/Navbar.css';
import { HiOutlineSearch, HiOutlineBell } from "react-icons/hi";
import user from '../assets/user.jpeg'

const Navbar = (props) => {
    return (
        <div className='navbar__header'>
            <div className='navbar__header-title'>{props.title}</div>
            <div className='navbar__header-items'>
                <div className='navbar__header-item navbar__header-item__searchgroup'>
                    <HiOutlineSearch className='navbar__header-icon' />
                    <input type='text' placeholder='Search Courses' className='navbar__header-item__searchbar' />
                </div>
                <div className='navbar__header-btns'>
                    <div className='navbar__header-item'>
                        <HiOutlineBell className='navbar__header-icon' />
                        <div className='navbar__header-badge'>3</div>
                    </div>
                    <img src={user} alt='' className='navbar__header-item__user' />
                </div>
            </div>
        </div>
    )
}

export default Navbar