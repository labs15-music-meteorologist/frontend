import React, { Component } from 'react';
import './App.css';
import ApiRunner from './components/ApiRunner';
import Auth from './components/Auth';
import LikedSongs from './components/LikedSongs';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <ApiRunner />
        <Route exact path='/' component={Auth} />
        <Route exact path='/dashboard' component={LikedSongs} />
      </Router>
    );
  }
}

export default App;
