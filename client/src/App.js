import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import AddLyricsPage from './pages/AddLyrics';
import GuessPage from './pages/Guess';
import MainNavigation from './components/Navigation/MainNavigation';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainNavigation />
          <Container maxWidth="sm">
            <Switch>
              <Redirect path="/" to="/home" exact />
              <Route path="/home" component={HomePage}/>
              <Route path="/add-lyrics" component={AddLyricsPage}/>
              <Route path="/guess" component={GuessPage}/>
            </Switch>
          </Container>
      </BrowserRouter>
    );
  }
}

export default App;
