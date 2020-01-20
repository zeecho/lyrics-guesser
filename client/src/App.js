import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import HomePage from './pages/Home';
import AddLyricsPage from './pages/AddLyrics';
import GuessPage from './pages/Guess';
import MainNavigation from './components/Navigation/MainNavigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainNavigation />
        <main className="main-content">
          <Switch>
            <Redirect path="/" to="/home" exact />
            <Route path="/home" component={HomePage}/>
            <Route path="/add-lyrics" component={AddLyricsPage}/>
            <Route path="/guess" component={GuessPage}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
