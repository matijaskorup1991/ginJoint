import React from 'react';
import img from '../assets/img/Logo.svg';
import footerImg from '../assets/img/Footer.svg';
import facebook from '../assets/img/Facebook.svg';
import instagram from '../assets/img/Instagram.svg';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div>
        <div className='img-holder'>
          <img src={img} alt='img' />
        </div>
        <div>
          <ul>
            <li>Find us</li>
            <li>132 9th Avenue</li>
            <li>New York, NY 10011</li>
            <li>646-559-1671</li>
            <li>info@btgnyc.com</li>
          </ul>
          <ul>
            <li>Hours of Operation</li>
            <li>Monday</li>
            <li>Tuesday - Friday</li>
            <li>Saturday</li>
            <li>Sunday</li>
          </ul>
          <ul>
            <li>8am — 4pm</li>
            <li>8am — 4pm</li>
            <li>8am — 10pm</li>
            <li>9am — 10pm</li>
            <li>9am — 4pm</li>
          </ul>
        </div>
      </div>
      <div className='footer-logo'>
        <img src={footerImg} alt='img' />
        <div className='social'>
          <img src={facebook} alt='img' />
          <img src={instagram} alt='img' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
