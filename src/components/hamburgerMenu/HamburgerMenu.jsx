import React from 'react';
import './HamburgerMenu.css'

const HamburgerMenu = ({isActive, toggleActiveClass}) => {
    
    return (
        <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleActiveClass} >
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </div>
    );
};

export default HamburgerMenu;