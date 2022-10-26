import React from 'react'
import './stylesheets/Footer.css';

import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__copyright'>
                &#169; 2022 Abhishek Aggarwal. All rights reserved
            </div>
            <div className='footer__links'>
                <AiFillLinkedin className='footer__link' />
                <AiFillGithub className='footer__link' />
                <AiFillInstagram className='footer__link' />
            </div>
        </div>
    )
}

export default Footer