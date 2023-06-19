import React from 'react';

const ThemesItem = ({color, img}) => {
    return (
       <img src={img} className='theme__img' alt="" />
    );
};

export default ThemesItem;