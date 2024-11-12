// src/App.js
import React from 'react';
import Hello from './components/Hello';
import User from './components/Query';
import Count from './components/Count';
import './App.css'

const App = () => {
    return (
        <div>
            <h1>Microservices Interface</h1>
            <Hello />
            <User  />
            <Count />
        </div>
    );
};

export default App;