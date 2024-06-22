import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import './NavBar.css'
import { Context } from '../../index';

const NavBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <nav className='navigation'>
            <ul>
                {device.types.map(type =>
                    <li 
                        className={type.id === device.selectedType.id ? 'active' : ''}
                        key={type.id} 
                        onClick={() => device.setSelectedType(type)}
                    >
                        {type.name}
                    </li>
                )}
            </ul>
        </nav>
    );
});

export default NavBar;