import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/backend/login`, credentials, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log(response.data);
            // Handle successful login (save token, redirect, etc.)
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error (show error message, etc.)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
        <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
        <button type="submit">Login</button>
        </form>
    );
};

export default Login;
