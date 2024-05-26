import React from 'react';
import './Form.css';

const Form = ({gettingWeather}) => {
    return (
        <form className='form' onSubmit={gettingWeather}>
            <input type="text" name="city" placeholder='City'/>
            <button>Get the weather</button>
        </form>
    );
};

export default Form;