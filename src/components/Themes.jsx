import React from 'react';
import { themes } from '../data';
import ThemesItem from './ThemesItem';
import { FaCog } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';
import './Themes.css'


const Themes = () => {
    return (
        <div className='style__switcher'>
        <div className="style__switcher-toggler">
            <FaCog/>
        </div>

        <div className='theme__toggel'>
            <BsMoon />
        </div>

        <h3 className='style__switcher-title'>Style Switcher</h3>
        <div className='style__switcher-items'>
            {themes.map((theme, index) => {
                return(
                    <ThemesItem key={index} {...theme} />
                )
            })}
        </div>

        <div className="style__switcher-close">&times;</div>

        </div>
    );
};

export default Themes;