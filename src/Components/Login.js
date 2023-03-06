import React from 'react';
import Form from './Form';
import '../Styles/Login.css'

const Login = () => {
    const heading = 'Login to continue.';
    const message = 'Welcome to MyApp!'
    return (
        <div className='login-wrapper'>
            <Form heading = {heading} message = {message} />
        </div>
    );
};

export default Login;