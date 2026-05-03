import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            <h1>Welcome to Yamuna Expressway Carpool</h1>
            <p>Find your ride now!</p>
            <div className="search-bar">
                <input type="text" placeholder="Source" />
                <input type="text" placeholder="Destination" />
                <input type="date" placeholder="Date" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default HeroSection;