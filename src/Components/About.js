import React from 'react';
import AboutBackground from "../Asset/about-background.png";
import AboutBackgroundImage from "../Asset/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';


const About = () => {
  return (
    <div className='about-section-container' >
        <div className="about-background-image-container">
            <img src={AboutBackground} alt=""/>
        </div>
        <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt=""/>
        </div>
        <div className="about-section-text-container">
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Health is wealth!!
                So you have to choose Right choice for Food</h1>
                <p className='primary-text'>
                    Grab your own.
                </p>
                <div className="about-buttons-container">
                    <button className='secondary-button'>Learn More</button>
                    <button className='watch-video-button'><BsFillPlayCircleFill/> Watch Video</button>
                </div>
        </div>
      
    </div>
  )
}

export default About
