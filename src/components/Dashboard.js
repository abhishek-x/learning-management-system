import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';

import './stylesheets/Dashboard.css';

import course1 from '../assets/course1.jpeg';
import course2 from '../assets/course2.jpeg';
import course3 from '../assets/course3.jpeg';
import course4 from '../assets/course4.jpeg';
import course5 from '../assets/course5.jpeg';
import course6 from '../assets/course6.jpeg';
import course7 from '../assets/course7.jpeg';
import course8 from '../assets/course8.jpeg';


const Dashboard = () => {
    return (
        <div className='dashboard'>

            <Navbar title="Dashboard" />

            <div className='dashboard__content'>

                <div className='dashboard__section-1'>
                    <div className='section-title'>Recently Accessed Courses</div>

                    <div className='cards'>
                        <Card title="JavaScript" image={course2} lessons="20" progress="66" />
                        <Card title="Data Science" image={course4} lessons="30" progress="52" />
                        <Card title="Photgraphy" image={course3} lessons="12" progress="95" />
                        <Card title="Geography" image={course1} lessons="15" progress="20" />
                    </div>
                </div>

                <div className='dashboard__section-2'>

                    <div className='dashboard__section-heading'>
                        <div className='section-title'>My Courses</div>
                        <form>
                            <select id="semester" name="semester">
                                <option value="1">Semester 1</option>
                                <option value="2">Semester 2</option>
                                <option value="3">Semester 3</option>
                                <option value="4">Semester 4</option>
                                <option value="5">Semester 5</option>
                                <option value="6">Semester 6</option>
                                <option value="7">Semester 7</option>
                                <option value="8">Semester 8</option>
                            </select>
                        </form>
                    </div>

                    <div className='cards'>
                        <Card title="System Design" image={course5} lessons="20" progress="75" />
                        <Card title="Probability and Statistics" image={course7} lessons="20" progress="12" />
                        <Card title="Social Media Marketing" image={course8} lessons="5" progress="90" />
                        <Card title="Finance" image={course6} lessons="20" progress="72" />
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Dashboard