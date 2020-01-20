import React from 'react';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Home } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

const mainNavigation = props => (
  <header className="main-navigation">
    <div className="main-navigation__logo">
      <h1>Lyrics Guesser</h1>
    </div>
    <nav className="main-navigation__items">
      <ul>
        <li><NavLink to="/home">Home <Home /></NavLink></li>
        <li><NavLink to="/add-lyrics">Add Lyrics</NavLink></li>
      </ul>
    </nav>
  </header>
)

export default mainNavigation;
