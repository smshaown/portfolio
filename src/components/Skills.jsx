import React from 'react';
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {

    return (
        <>
            {skills.map(({title, percentage}, index) => {
                return(
                    <div className="progress__box" key={index}>
                        <div className="progress__circle">
                            <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage} />
                        </div>
                        
                        <h3 className='skills__title mt-2'>{title}</h3>
                    </div>
                )
            })}
        </>
    );
};

export default Skills;