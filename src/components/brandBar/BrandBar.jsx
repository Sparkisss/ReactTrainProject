import React, { useContext } from 'react';
import './BrandBar.css'
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <nav className='brand'>
            <ul>
                {device.brands.map(brand => 
                    <li 
                        key={brand.id}
                        onClick={() => device.setSelectedBrand(brand)}
                        className={brand.id === device.selectedBrand.id ? 'active' : ''}
                    >
                        {brand.name}
                    </li>
                )}
            </ul>
        </nav>
    );
});

export default BrandBar;