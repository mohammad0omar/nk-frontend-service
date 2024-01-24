import React, { useState } from 'react';
import axios from 'axios';
import './DeletePerson.css'; // Assuming you will create a CSS file for styling

const DeletePerson = () => {
    const [personId, setPersonId] = useState('');

    const handleChange = (e) => {
        setPersonId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/backend/person/${personId}`, {
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('access_token')}`, // Assuming token is stored in localStorage
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log(response.data);
            // Handle success (show success message, etc.)
        } catch (error) {
            console.error('Error deleting person:', error);
            // Handle error (show error message, etc.)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="delete-person-form">
            <input type="text" value={personId} onChange={handleChange} placeholder="Person ID" />
            <button type="submit">Delete Person</button>
        </form>
    );
};

export default DeletePerson;
