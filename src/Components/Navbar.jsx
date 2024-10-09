import React from 'react';
import './Navbar.css';
import ak_logo from '/Users/apple/WebDev2/gdsc_portfolio/src/assets/nav_logo.png'
import gdsc from '/Users/apple/WebDev2/gdsc_portfolio/src/assets/gdsc_logo.png'

export default function Navbar() {
    return (
    
        <div className='navbar'>
            <div className='text'>  React </div>
            <div className="text2">Portfolio</div>
            <div className="logo_container">
               <img src={ak_logo} alt="background image" className="ak_logo" /> 
               <img src={gdsc} alt="logo" className="gdsc" /> 
            </div>
            <ul>
                <a href="#Home">Home</a>
                <a href="#About">About</a>
                <a href="#Socities" >Socities  </a>
                <a href="#Contact">Contact </a>


            </ul>
        </div>
    );
}

