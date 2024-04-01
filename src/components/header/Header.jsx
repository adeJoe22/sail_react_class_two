import React from 'react';
import './Header.css';
import NavLinks from '../navlinks/NavLinks';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <span id="logo">LOGO</span>
      <div className="navigation">
        <NavLinks to={'/home'} linkName={'Home'} />
        <NavLinks to={'/about'} linkName={'About'} />
        <NavLinks to={'/contact'} linkName={'Contact'} />
      </div>

      <div className="cta">
        <Link to={'/'}>
          <button>Login</button>
        </Link>
        <div id="avatar">
          <img />
        </div>
        <button>Logout</button>
      </div>
    </div>
  );
}
