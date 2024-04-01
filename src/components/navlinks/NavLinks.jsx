import React from 'react';

import './Navlinks.css';
import { NavLink } from 'react-router-dom';
export default function NavLinks({ to, linkName }) {
  return (
    <div id="links">
      <NavLink style={{ textDecoration: 'none', color: '#000' }} to={to}>
        {linkName}
      </NavLink>
    </div>
  );
}
