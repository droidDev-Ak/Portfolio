
import React from 'react';
import './About.css';
import my_img from '/Users/apple/WebDev2/gdsc_portfolio/src/assets/img.jpg'

export default function about() {
    return (
        <div className='about' id="About">
            <div className='about_title'> About Me</div>
            <div className="prof_img">
                <img src={my_img} alt="profile image" />
            </div>
            <div className="cont">
            <div className="exp">
                <p className='text_about'>
                    A student of Electronics and Communication Engineering at DTU
                    Passionate about technology and innovation, constantly seeking to expand my knowledge in the field. My interests include coding, app development, and actively participating in college societies to enhance my skills and network
                    </p>
            </div>

            <div className='text_about'>HTML & CSS  </div>
            <div className='text_about'> C++  </div>
            <div className='text_about'> Python  </div>
            <div className='text_about'>Python openCV</div>

            </div>



        </div>
    );
}
