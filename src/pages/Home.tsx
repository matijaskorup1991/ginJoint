import React from 'react';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Events from '../components/Events';
import Drinks from '../components/Drinks';

import bar from '../assets/img/bar2.svg';
import coctailst from '../assets/img/coctails.svg';

const Home: React.FC = () => {
  return (
    <div className='landing'>
      <Hero />
      <Story
        about='About'
        heading=' The Story of Bathtub Gin'
        text='Gin was the predominant drink in the United States during the Prohibition-Era 1920 s and many variations were created. "Bathtub gin"
        was developed in response to the poor-quality of alcohol that was
        available at the time.'
        buttonText='Read More'
        imgSrc={bar}
      />
      <Events />
      <Story
        about='Cocktail & Food Menus'
        heading='Hand Crafted Cocktails & Damn Good Eats'
        text='We mix our gin and other spirits with the finest and freshest fruits, juices, syrups and infusions in cocktails inspired by original recipes.'
        buttonText='See Menus'
        imgSrc={coctailst}
      />
      <Drinks />
    </div>
  );
};

export default Home;
