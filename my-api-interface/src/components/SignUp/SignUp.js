import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        isAdmin: false,
        email: '',
        password: '',
        dob: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/backend/person`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            // Handle success (redirect, show message, etc.)
        } catch (error) {
            console.error('Error creating new person:', error);
            // Handle error (show error message, etc.)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="signup-form">
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} placeholder="Date of Birth" />
        <button type="submit">Sign Up</button>
    </form>
    );
};

export default SignUp;
