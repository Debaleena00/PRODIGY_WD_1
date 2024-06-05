import React from 'react';
import Logo from "../Asset/Logo.svg";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-Section-one'>
        <div className='footer-logo-container'>
            <img src={Logo} alt=''/>
    </div>
    <div className='footer-icon'>
      <BsTwitter/>
      <SiLinkedin/>
      <BsYoutube/>
      <FaFacebook/>
    </div>
      </div>
        <div className='footer-Section-two'>
        <div className='footer-Section-column'>
            <span>Quality</span>
            <span>Help</span>
            <span>Share</span>
            <span>Carrers</span>
            <span>Testimonial</span>
            <span>Work</span>

    </div>
    <div className='footer-Section-column'>
        <span>244-5333-7783</span>
        <span>hello@food.in</span>
        <span>press@food.in</span>
        <span>contact@food.in</span>
    </div>
    <div className='footer-Section-column'>
        <span>Terms & Condition</span>
        <span>Privacy & Policy</span>
    </div>

    </div>
    </div>
  );
};

export default Footer;
