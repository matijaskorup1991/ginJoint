import React from 'react';

import './Figure.scss';
interface Data {
  spanText: string;
  imgSrc: string;
  caption: string;
  text: string;
  time: string;
}

const Figure: React.FC<Data> = ({ imgSrc, caption, text, time, spanText }) => {
  return (
    <figure className='figure'>
      <div>
        <img src={imgSrc} alt='figure' />
        <span>{spanText}</span>
      </div>
      <figcaption>{caption}</figcaption>
      <p>{time}</p>
      <p>{text}</p>
    </figure>
  );
};

export default Figure;
