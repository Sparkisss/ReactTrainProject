import React from 'react';
import './WeatherInfo.css';

const WeatherInfo = ({temp, city, country, sunrise, sunset, error}) => {
    return (
        <div className='weatherInfo'>
            {
                city &&
                <ul>
                    <li>City: {city}</li>
                    <li>Country: {country}</li>
                    <li>Temperature: {temp}</li>   
                    <li>Sunrise: {sunrise}</li>
                    <li>Sunset: {sunset}</li>                    
                </ul>
            }
        <div>{error}</div>    
        </div>
    );
};

export default WeatherInfo;