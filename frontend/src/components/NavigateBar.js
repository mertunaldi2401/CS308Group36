// src/components/NavigateBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./NavigateBar.css";

const NavigateBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/store">Store</Link>
            </div>
            <div className="auth-buttons">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/register"><button>Sign Up</button></Link>
            </div>
        </nav>
    );
};

export default NavigateBar;
