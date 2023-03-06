import React from 'react';
import Form from './Form';

const Register = () => {
    const heading = 'Register to myApp.';
    const message = 'Welcome to MyApp!'

    return (
        <div>
            <Form heading = {heading} message = {message}/>            
        </div>
    );
};

export default Register;