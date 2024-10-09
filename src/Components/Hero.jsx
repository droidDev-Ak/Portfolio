import React from 'react';
import './Hero.css';
import my_img from '/Users/apple/WebDev2/gdsc_portfolio/src/assets/img.jpg'

export default function Hero() {
  return (
<div className="hero" id="Home">
    <img src={my_img} alt="My image" />
    <br></br>
      <h2><span>I'm Akash</span> a student of Electronics and Communication Engineering at DTU </h2>

      <div className='about_el'>Passionate about technology and innovation, constantly seeking to expand my knowledge in the field. My interests include coding, app development, and actively participating in college societies to enhance my skills and network.</div>

      </div>
  );
}
