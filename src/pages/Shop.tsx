import React from 'react';
import open from '../assets/img/open.svg';
import './Shop.scss';

const Shop: React.FC = () => {
  return (
    <div className='shop'>
      <img src={open} alt='open' />
      <div className='stay-tuned'>
        <h2>COMING SOON</h2>
        <h2>STAY TUNED!</h2>
      </div>
    </div>
  );
};

export default Shop;
