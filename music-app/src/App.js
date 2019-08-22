import React, { Component } from 'react';
import './App.css';
import ApiRunner from './components/ApiRunner';
import Auth from './components/Auth';
import LikedSongs from './components/LikedSongs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <ApiRunner />
        <Route exact path='/' component={Auth} />
        <Route exact path='/dashboard' component={LikedSongs} />
      </Router>
    );
  }
}

export default App;
