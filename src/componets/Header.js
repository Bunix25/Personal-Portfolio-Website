// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <h1>Slava Zakharuk</h1>
                <p>Web Developer | Cybersecurity Enthusiast</p>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;