import React from 'react';
import Welcome from './Welcome';
import './App.css';

const App = () => {
    return (
        <div>
            <h1>Hello, React World!</h1>
            <h3><Welcome name="Nadeesha"/></h3>
        </div>
    );
};

export default App; // ✅ This is the required default export


