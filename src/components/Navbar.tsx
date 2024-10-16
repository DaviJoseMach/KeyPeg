import React, { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-title">KeyPeg</h1>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a href="#home">Início</a>
                <a href="#features">Funcionalidades</a>
                <a href="#stats">Estatísticas</a>
                <a href="#suggestions">Sugestões</a>
                <a href="#apoie">Apoie</a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
                <div className={`line ${isOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    );
};

export default Navbar;
