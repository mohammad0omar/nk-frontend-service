import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Persons.css'; // Assuming you will create a CSS file for styling

const Persons = () => {
    const [persons, setPersons] = useState([]);

    useEffect(() => {
        const fetchPersons = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/backend/persons`, {
                    withCredentials: true
                });
                setPersons(response.data);
            } catch (error) {
                console.error('Error fetching persons:', error);
                // Handle error (show error message, etc.)
            }
        };

        fetchPersons();
    }, []);

    return (
        <div className="persons-list">
            <h2>Persons</h2>
            {persons.length > 0 ? (
                <ul>
                    {persons.map(person => (
                        <li key={person.id}>{person.firstName} {person.lastName}</li>
                        // Customize as per your API response structure
                    ))}
                </ul>
            ) : (
                <p>No persons found.</p>
            )}
        </div>
    );
};

export default Persons;
