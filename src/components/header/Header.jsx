import React, {useContext, useState} from 'react';
import './Header.css'
import logo from '../../source/icon/starbucks.svg'
import placeIcon from '../../source/icon/marker.svg'
import { Link } from 'react-router-dom';
import Button from '../UI/button/Button';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const Header = observer(() => {
    const {user} = useContext(Context)
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
                                <Link to="/store">Online store</Link>
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
                    {user.isAuth ? 
                        <>
                            <Button route={"/auth"} state={''} size={btnSize}>Admin panel</Button>
                            <Button route={"/auth"} state={''} size={btnSize}>Exit</Button>
                        </>
                        :
                        <>
                            <Button route={"/auth"} state={''} size={btnSize}>Sign in</Button>
                        </>
                    }
                    <hr/>
                </div>
                <HamburgerMenu isActive={isActive} toggleActiveClass={toggleActiveClass}/>
            </div>
    );
});

export default Header;