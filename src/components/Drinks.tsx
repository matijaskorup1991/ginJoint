import React from 'react';
import './Drinks.scss';
import gin from '../assets/img/gin.svg';

const ShowDrinks: React.FC = () => {
  return <div></div>;
};

const Drinks: React.FC = () => {
  return (
    <div className='drinks'>
      <ShowDrinks />
      <div>
        <img src={gin} alt='img' />
        <h3></h3>
        <p></p>
      </div>
    </div>
  );
};

export default Drinks;
