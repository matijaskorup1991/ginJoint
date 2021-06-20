import React from 'react';
import ContactStory from '../components/ContactStory';
import bar from '../assets/img/bar.svg';

import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <div>
      <div className='contact'>
        <ContactStory
          about='Contact Us'
          imgSrc={bar}
          heading="Experience the 1920's Prohibition"
          text='Want to get in touch? Drop us a dime or shoot us an email using the form below.'
        />
      </div>
      <div className='contact-address'>
        <div>
          <h2>132 9TH AVENUE NEW YORK</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
