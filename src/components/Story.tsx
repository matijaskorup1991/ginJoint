import React from 'react';
import './Story.scss';

interface Data {
  heading: string;
  about: string;
  text: string;
  buttonText: string;
  imgSrc: string;
}

const Story: React.FC<Data> = ({
  heading,
  about,
  text,
  buttonText,
  imgSrc,
}) => {
  return (
    <div className='story'>
      <div>
        <p>{about}</p>
        <h2>{heading}</h2>
        <p>{text}</p>
        <span>{buttonText}</span>
      </div>
      <div className='story-img-holder'>
        <img src={imgSrc} alt='story' />
      </div>
    </div>
  );
};

export default Story;
