import React, {useState} from 'react';
import './Header.css'
import logo from '../../source/icon/starbucks.svg'
import placeIcon from '../../source/icon/marker.svg'
import { Link } from 'react-router-dom';
import Button from '../UI/button/Button';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [btnSize, setBtnSize] = useState('0.9em');

    const toggleActiveClass = () => {
        if(!isActive) setBtnSize('1.4em')
        else setBtnSize('0.9em')
        setIsActive(!isActive);
    } 

    return (
            <div className='wrap'>
                <img className='logo' src={logo} alt="logo" />
                <div className={`nav ${isActive ? 'active' : ''}`}>                    
                    <nav>
                        <ul>
                            <li>
                                <Link to="/menu">MENU</Link>
                            </li>
                            <li>
                                <Link to="/rewards">REWARDS</Link>
                            </li>
                            <li>
                                <Link to="/giftCards">GIFT CARDS</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={`logIn ${isActive ? 'active' : ''}`}>
                    <div>
                        <img className='logo' src={placeIcon} alt="logo" />
                        <Link to="/findStore">Find store</Link>
                    </div>
                    <Button route={"/rewards"} state={''} size={btnSize}>Sign in</Button>
                    <Button route={"/"} state={'checked'} size={btnSize}>Join now</Button>
                    <hr/>
                </div>
                <HamburgerMenu isActive={isActive} toggleActiveClass={toggleActiveClass}/>
            </div>
    );
};

export default Header;