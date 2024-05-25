import React from 'react';
import Button from '../UI/button/Button'
import './Form.css';

const Form = ({gettingWeather}) => {
    return (
        <form onSubmit={gettingWeather}>
            <input type="text" name="city" placeholder='City'/>
            <button>Get the weather</button>
        </form>
    );
};

export default Form;