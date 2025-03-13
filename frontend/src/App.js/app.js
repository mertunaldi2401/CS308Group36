// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigateBar from './components/NavigateBar';
import Store from './pages/Store';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <NavigateBar />
            <Routes>
                <Route path="/" element={<Store />} />
                <Route path="/store" element={<Store />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
