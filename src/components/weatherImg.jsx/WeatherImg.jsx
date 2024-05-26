import React from 'react';
import './WeatherImg.css'
import backPage from '../../source/image/weather.jpg'

const WeatherImg = () => {
    return (
        <div className='imgContain'>
            <img src={backPage} alt="backPage" />
        </div>
    );
};

export default WeatherImg;