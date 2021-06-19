import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>HOME</Link>
        </li>
        <li>
          <Link to='/entertainment'>ENTERTAINMENT</Link>
        </li>
        <li>
          <Link to='/shop'>SHOP</Link>
        </li>
        <li>
          <Link to='/events'>EVENTS</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
