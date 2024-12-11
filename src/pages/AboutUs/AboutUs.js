import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <header className="about-us-header">
                <h1>Support Tribal Artisans by Promoting Their Handicrafts</h1>
                <p className="header-subtitle">Discover a wide range of authentic handicrafts created by talented tribal artisans. Each purchase directly supports their skill development and helps preserve their traditional art forms.</p>
            </header>
            <section className="about-us-content">
                <div className="mission-statement">
                    <h2>Our Mission</h2>
                    <p>We are dedicated to empowering tribal artisans by showcasing their unique craftsmanship to a broader audience. Our goal is to bridge the gap between traditional artisans and modern markets, ensuring that their heritage is celebrated and sustained.</p>
                </div>
                <div className="artisans-story">
                    <h2>Meet the Artisans</h2>
                    <p>Our artisans come from diverse backgrounds and regions, each bringing their own story and tradition to life through their art. From intricate wood carvings to colorful handwoven fabrics, every piece holds a story of heritage and skill passed down through generations.</p>
                </div>
            </section>
            <section className="explore-handicrafts">
                <h2>Explore Handicrafts</h2>
                <p>Discover and support our artisans by exploring their creations. Every purchase not only helps sustain their craft but also keeps their culture alive.</p>
                <button className="explore-button">Explore Handicrafts</button>
            </section>
        </div>
    );
};

export default AboutUs;
