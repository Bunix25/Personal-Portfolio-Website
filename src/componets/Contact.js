// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <p>Email: <a href="mailto:slava.zakharuk@gmail.com">slava.zakharuk@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/slava-zakharuk/">linkedin.com/in/slava-zakharuk</a></p>
            </div>
        </section>
    );
};

export default Contact;