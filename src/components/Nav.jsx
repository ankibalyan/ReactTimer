import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer</li>
          <li>
            <Link to="/">Timer</Link>
          </li>
          <li>
            <Link to="/countdown">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text"> create by
            <a href="https://twitter.com/ankibalyan">Ankit Balyan </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Nav };
