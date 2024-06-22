import React from 'react';
import NavBar from '../components/navBar/NavBar';
import BrandBar from '../components/brandBar/BrandBar';
import DeviceList from '../components/deviceList/DeviceList';

const Store = () => {
    return (
        <main className='store'>
            <NavBar/>
            <BrandBar/>
            <DeviceList/>
        </main>
    );
};

export default Store;