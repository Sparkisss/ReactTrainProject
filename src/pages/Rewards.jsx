import React, {useState} from 'react';
import WeatherInfo from '../components/weatherInfo/WeatherInfo';
import Form from '../components/form/Form';
import WeatherImg from '../components/weatherImg.jsx/WeatherImg';

const API_KEY = 'c3ce5c27c2eab8287f2be14870b310cb';

const Rewards = () => {
    const [temp, setTemp] = useState(undefined);
    const [city, setCity] = useState(undefined);
    const [cityPrew, setCityPrew] = useState(' ');
    const [country, setCountry] = useState(undefined);
    const [sunrise, setSunrise] = useState(undefined);
    const [sunset, setSunset] = useState(undefined);
    const [error, setError] = useState(undefined);    

    const gettingWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
    
        try {
            if (!city) {
                throw new Error('Entry city name');
            }
    
            if (city === cityPrew) {
                throw new Error('You chose the same city name');
            }
    
            const weatherApiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
            if (!weatherApiResponse.ok) {
                throw new Error('City not found');
            }
    
            const data = await weatherApiResponse.json();
            setCityPrew(data.name);
            updateData(data, undefined);
        } catch (error) {            
            if (error.message === 'You chose the same city name') {
                setError(error.message)
            }else {
                setCityPrew(' ');
                updateData(undefined, error.message);
            }             
        } finally {
            e.target.elements.city.value = '';
        }
    }   

    const updateData = (data, errorMessage) => {
        if (data) {
            setTemp(data.main.temp);
            setCity(data.name);
            setCountry(data.sys.country);
            setSunrise(getTime(data.sys.sunrise));
            setSunset(getTime(data.sys.sunset));
            setError(errorMessage)
        }else {
            setTemp(undefined);
            setCity(undefined);
            setCountry(undefined);
            setSunrise(getTime(undefined));
            setSunset(getTime(undefined));
            setError(errorMessage)
        }
    }

    const getTime = (time) => {
        let date = new Date();
        date.setTime(time);
        return `${date.getHours().toString().padStart(2, '0')}: 
        ${date.getMinutes().toString().padStart(2, '0')}:
        ${date.getSeconds().toString().padStart(2, '0')}`;
    }

    return (
        <div className='weatherContain'>
            <WeatherImg/>
            <Form gettingWeather={gettingWeather}/>
            <WeatherInfo
            temp={temp}
            city={city}
            country={country}
            sunrise={sunrise}
            sunset={sunset}
            error={error}/>
        </div>
    );
};

export default Rewards;