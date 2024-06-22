import React from 'react';
import Button from '../components/UI/button/Button';

const Auth = () => {
    return (
        <div className='modal active'>
            <div className='modal__content active'>
                <form>
                    <h2>Log in</h2>
                    <input type="text" name='email' placeholder='enter your email' />
                    <input type="password" name='password' placeholder='enter your password' />
                    <div>
                        <p>Yoy don't have account? <a href='/'>Registration</a></p>
                        <Button route={"/auth"} state={''} size={''} arg={false}>Enter</Button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Auth;