import React from 'react';
import './ContactStory.scss';

interface Data {
  about: string;
  imgSrc: string;
  heading: string;
  text: string;
}

const ContactStory: React.FC<Data> = ({ about, imgSrc, heading, text }) => {
  return (
    <div className='contact-story'>
      <div>
        <p>{about}</p>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className='contact-story-img-holder'>
        <img src={imgSrc} alt='contact' />
      </div>
    </div>
  );
};

export default ContactStory;
