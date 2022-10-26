import React from 'react';
import './stylesheets/Card.css'

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Card = (props) => {
    const progressBarStyles = {
        root: {},
        path: {
            stroke: `var(--first-color)`,
            strokeLinecap: 'butt',
            transition: 'stroke-dashoffset 0.5s ease 0s',
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
        },
        trail: {
            stroke: 'var(--second-color)',
            strokeLinecap: 'butt',
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
        },
        text: {
            fill: 'var(--first-color)',
            fontSize: '1.5rem',
        },
    }
    return (
        <div className='card'>
            <img src={props.image} alt='' className='card-image' />
            <div className='card-contents'>
                <div className='card-content'>
                    <div className='card-title'>{props.title}</div>
                    <div className='card-subtitle'>{props.lessons} Lessons</div>
                    <div className='card-btn'>Resume Course</div>
                </div>
                <div style={{ width: '4rem', height: '4rem' }}>
                    <CircularProgressbar value={props.progress} text={`${props.progress}%`} styles={progressBarStyles} />
                </div>
            </div>
        </div>
    )
}

export default Card