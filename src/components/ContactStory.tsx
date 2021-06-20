import React from 'react';
import './ConntactStory.scss';

const ContactStory: React.FC = ({ about, imgSrc, heading, text }) => {
  return (
    <div className='contact-story'>
      <div>
        <p>{about}</p>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className='contact-story-img-holder'>
        <img src={imgSrc} alt='image' />
      </div>
    </div>
  );
};

export default ContactStory;
