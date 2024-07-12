// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <h2>About Me</h2>
                <img src="images/your_photo.jpg" alt="Your Photo" className="profile-photo" />
                <p>Welcome to my personal portfolio website. I'm Slava Zakharuk, a passionate web developer and cybersecurity enthusiast. I have a diverse skill set in programming languages and technologies, and I am continuously learning to deliver effective solutions.</p>
            </div>
        </section>
    );
};

export default About;