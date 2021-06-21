import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import './Nav.scss';

// interface Params {
//   match: any;
// }

interface Data extends RouteComponentProps<{ match: any }> {}

const Nav: React.FC<Data> = ({ match }) => {
  const style = { color: '#bb7043' };
  const style1 = { color: '#e5e5e5' };

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' activeStyle={match.isExact ? style : style1}>
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
