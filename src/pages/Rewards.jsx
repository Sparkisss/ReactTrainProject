import React, {useState} from 'react';
import WeatherInfo from '../components/weatherInfo/WeatherInfo';
import Form from '../components/form/Form';

const API_KEY = 'c3ce5c27c2eab8287f2be14870b310cb';

const Rewards = () => {
    const [temp, setTemp] = useState(undefined);
    const [city, setCity] = useState(undefined);
    const [country, setCountry] = useState(undefined);
    const [sunrise, setSunrise] = useState(undefined);
    const [sunset, setSunset] = useState(undefined);
    const [error, setError] = useState(undefined);

    const gettingWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;

        if (city) {
            const api_url = await fetch(`
            https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric  
            `);
            const data = await api_url.json()          
            setTemp(data.main.temp);
            setCity(data.name);
            setCountry(data.sys.country);
            setSunrise(getTime(data.sys.sunrise));
            setSunset(getTime(data.sys.sunset));
            setError(undefined)
        }else {
            setTemp(undefined);
            setCity(undefined);
            setCountry(undefined);
            setSunrise(undefined);
            setSunset(undefined);
            setError('Enter city name')
        }
    }

    const getTime = (time) => {
        let date = new Date();
        date.setTime(time);
        return `${date.getHours()}: ${date.getMinutes()}:${date.getSeconds()}`;
    }

    return (
        <div>
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