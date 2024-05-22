import React from 'react';
import './Header.css'
import logo from '../../source/icon/starbucks.svg'

const Header = () => {
    return (
        <div className='wrap'>
            <div className='nav'>
                <img className='logo' src={logo} alt="d" />
                <nav>
                    <ul>
                        <li>MENU</li>
                        <li>REWARDS</li>
                        <li>GIFT CARDS</li>
                    </ul>
                </nav>
            </div>
            <div className='logIn'>
                <div>Find store</div>
                <button>Sign in</button>
                <button>Join now</button>
            </div>
        </div>
    );
};

export default Header;