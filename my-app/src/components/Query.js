import React, { useState } from 'react';

const User = () => {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const fetchUserGreeting = async () => {
        try {
            const response = await fetch(`http://localhost:8082/api/user?name=${name}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.text();
            setGreeting(data);
        } catch (error) {
            console.error('Fetch error:', error);
            setGreeting('Пожалуйста, введите Ваше имя');
        }
    };

    return (
        <div>
            <h2>Знакомство</h2>
            <input
                type="text"
                placeholder="Введите своё имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={fetchUserGreeting}>Поприветствовать</button>
            <p>Сообщение: {greeting}</p>
        </div>
    );
};

export default User;