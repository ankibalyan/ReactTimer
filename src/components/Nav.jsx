import React from 'react';
import { Link, IndexLink } from 'react-router';

const Nav = () => {
  return (
    <nav className="top-bar text-center">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer</li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="https://twitter.com/ankibalyan">Ankit Balyan </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Nav };
