import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li>
          <NavLink to='/entertainment'>ENTERTAINMENT</NavLink>
        </li>
        <li>
          <NavLink to='/shop'>SHOP</NavLink>
        </li>
        <li>
          <NavLink to='/events'>EVENTS</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>CONTACT</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
