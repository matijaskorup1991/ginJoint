import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

const Nav: React.FC = () => {
  const style = { color: '#bb7043' };

  return (
    <nav>
      <ul>
        <li>
          <NavLink activeStyle={style} to='/'>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to='/entertainment'>
            ENTERTAINMENT
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to='/shop'>
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to='/events'>
            EVENTS
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={style} to='/contact'>
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
