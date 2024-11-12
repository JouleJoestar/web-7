import React, { useState } from 'react';

const Hello = () => {
    const [message, setMessage] = useState('');

    const fetchHelloMessage = async () => {
        try {
            const response = await fetch('http://localhost:8081/getMessage');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.text();
            setMessage(data);
        } catch (error) {
            console.error('Fetch error:', error);
            setMessage('Error fetching message');
        }
    };

    return (
        <div>
            <h2>Get Hello Message</h2>
            <button onClick={fetchHelloMessage}>Получить привет</button>
            <p>Сообщение: {message}</p>
        </div>
    );
};

export default Hello;