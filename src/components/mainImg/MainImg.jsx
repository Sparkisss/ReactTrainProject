import React from 'react';

import './MainImg.css'

const MainImg = ({page}) => {
    const {img} = page;
    
    return (
        <>
            <img className='blockPage' src={img} alt="page" />
        </>
    );
};

export default MainImg;