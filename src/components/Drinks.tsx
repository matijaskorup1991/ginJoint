import React from 'react';
import './Drinks.scss';
import gin from '../assets/img/gin.svg';
import jack from '../assets/img/jack.svg';

interface Data {
  imgSrc: string;
  text: string;
  author: string;
}

const ShowDrinks: React.FC<Data> = ({ imgSrc, text, author }) => {
  return (
    <div className='img-holder'>
      <img src={imgSrc} alt='img' />
      <h3>{text}</h3>
      <p>{author}</p>
    </div>
  );
};

const Drinks: React.FC = () => {
  return (
    <div className='drinks'>
      <ShowDrinks
        imgSrc={gin}
        text='A trick door opening to Bathtub Gin, a hopping Chelsea gin joint
        harkening back to the days of false store fronts'
        author='The Guardian'
      />
      <span></span>
      <ShowDrinks
        imgSrc={jack}
        text='Life on the inside: exactly how you imagined it’d be... nailhead-tucked bar stools and—smack-dab in the center of the room—a glass-covered, claw-foot bathtub.'
        author='URBAN DADDY'
      />
    </div>
  );
};

export default Drinks;
