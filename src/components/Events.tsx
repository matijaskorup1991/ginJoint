import React from 'react';
import Figure from './Figure';
import data from '../data/data.json';

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
        {data.map((item) => {
          return (
            <Figure
              key={Math.random()}
              spanText={item.event}
              caption={item.date}
              time={item.time}
              text={item.description}
              imgSrc={item.picture}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Events;
