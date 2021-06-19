import React from 'react';
import Figure from './Figure';
import img from '../assets/img/Rectangle.svg';
import img1 from '../assets/img/Rectangle.png';
import img2 from '../assets/img/Rectangl.svg';

import './Events.scss';

const Events: React.FC = () => {
  return (
    <div className='events'>
      <p className='event-text'>
        Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly
        entertainment is currently on pause. Stay tuned for updates on our
        reopening date and new events, coming soon!
      </p>
      <div>
        <Figure
          spanText="Jazz n' Jive"
          caption='Every Monday'
          time='9-11pm'
          text='Jazz up your Monday nights with intimate and lively performances by a
        rotating selection of renowned bands.'
          imgSrc={img}
        />
        <Figure
          spanText='DJs & Dance Tracks'
          caption='Every Thursday, Friday & Saturday Night'
          time='From 9pm & 10pm'
          text="If you're looking for a packed crowd, come when the party is bigger, the pace is faster, and the morals are looser."
          imgSrc={img1}
        />{' '}
        <Figure
          spanText='Burlesque After Dark'
          caption='Every Tuesday & Sunday'
          time='9:30pm'
          text='Enter the world of burlesque and lose yourself in enticing witty performances, exceptional cocktails, and lively music.'
          imgSrc={img2}
        />
      </div>
    </div>
  );
};

export default Events;
