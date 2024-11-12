import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);

    const fetchCount = async () => {
        try {
            const response = await fetch('http://localhost:8083/count');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.text();
            setCount(data);
        } catch (error) {
            console.error('Fetch error:', error);
            setCount('Error fetching count');
        }
    };

    const incrementCount = async () => {
        try {
            await fetch('http://localhost:8083/count', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ count: 1 }),
            });
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <div>
            <h2>Count Service</h2>
            <button onClick={fetchCount}>Счётчик</button>
            <button onClick={incrementCount}>Увеличить счётик</button>
            <p>Счётчик: {count}</p>
        </div>
    );
};

export default Count;