import React from 'react';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import { NavLink } from 'react-router-dom';

import './MainNavigation.css';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const mainNavigation = props => (
      <Container maxWidth="sm">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3">
              <NavLink to="/home" className="navlink-home">Lyrics Guesser</NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
)

export default mainNavigation;
