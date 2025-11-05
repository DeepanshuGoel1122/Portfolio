import React from 'react';
import avatar from '../Assets/Avatar.jpeg';

const Hero = () => {
  return (
    <section className="section hero" id="home">
      <div className="grid">
        <div>
          <h1 className="hero-title">
            Deepanshu Goel
          </h1>
          <h2 className="hero-subtitle">
            Full Stack Developer
          </h2>
          <p className="muted hero-text">
            I build elegant, performant, and accessible web applications that solve real-world problems and delight users.
          </p>
          <div style={{ marginTop: 16 }}>
            <a className="btn btn-primary" style={{ height: 48, padding: '0 20px', maxWidth: 480 }} href="#projects">
              <span>View My Work</span>
            </a>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div 
            className="avatar" 
            alt="avatar of Deepanshu Goel"
            style={{
              backgroundImage: `url(${avatar})`
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

