// src/pages/Store.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import "./Store.css";

const Store = () => {
    const { user } = useContext(AuthContext);
    const [showPrompt, setShowPrompt] = useState(false);

    const guitars = [
        { id: 1, name: "Ibanez Q547 Headless 7-String", price: 1200, serial: "SN-112339Q547-BMM", image: "/src/store/112339Q547-BMM ( B-STOK )_3.jpg.webp" },
        { id: 2, name: "Fender American Vintage", price: 2000, serial: "SN-1228000110250840", image: "/src/store/1228000110250840_1.jpg.webp" },
        { id: 3, name: "Gibson Les Paul Heritage", price: 900, serial: "SN-120fd093693e4c688a6f97a13126c85b", image: "/src/store/gibson-lpcs00hsnh1-les-paul-classic-elektro-gitar-heritage-cherry-sunburst-120fd093693e4c688a6f97a13126c85b-0ab635a007eb7125007a00265bb7af41-max-pp.jpg" }
    ];

    const handleOrderClick = () => {
        if (!user) {
            setShowPrompt(true);
        } else {
            alert("Order placed successfully!");
        }
    };

    return (
        <div className="store-container">
            <h1 className="store-title">Guitar Store</h1>
            <div className="guitar-list">
                {guitars.map(guitar => (
                    <div key={guitar.id} className="guitar-card">
                        <img src={guitar.image} alt={guitar.name} className="guitar-image" />
                        <h3>{guitar.name}</h3>
                        <p>Price: ${guitar.price}</p>
                        <p className="serial-number">{guitar.serial}</p>
                        <button onClick={handleOrderClick}>Order Now</button>
                    </div>
                ))}
            </div>
            {showPrompt && (
                <div className="login-prompt">
                    <p>You need to be logged in to place an order.</p>
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/register"><button>Register</button></Link>
                    <button onClick={() => setShowPrompt(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default Store;
