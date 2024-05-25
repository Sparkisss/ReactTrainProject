import React from 'react';
import './WeatherInfo.css';

const WeatherInfo = ({temp, city, country, sunrise, sunset, error}) => {
    return (
        <div>
            {
                city &&
                <ul>
                    <li>{temp}</li>
                    <li>{city}</li>
                    <li>{country}</li>
                    <li>{sunrise}</li>
                    <li>{sunset}</li>                    
                </ul>
            }
        <div>{error}</div>    
        </div>
    );
};

export default WeatherInfo;