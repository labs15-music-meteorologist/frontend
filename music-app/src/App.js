import React, { Component } from 'react';
import './App.css';
import ApiRunner from './components/ApiRunner';
import Auth from './components/Auth';
import LikedSongs from './components/LikedSongs';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
<<<<<<< HEAD
import SpotifyPlayer from './components/Player';
=======
import Helloworld from './components/Helloworld'
>>>>>>> 5a438ec828dae0036d349d0e2bfdce60d8717a6e

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
<<<<<<< HEAD
        <Route exact path='/' component={Auth} />
        <Route exact path='/dashboard' component={LikedSongs} />
        <Route exact path='/player' component={SpotifyPlayer} />
=======
        <Route exact path='/' render={props => <Auth {...props} />} />
        <Route
          exact
          path='/dashboard'
          render={props => <LikedSongs {...props} />}
        />
        <Route exact path='/helloworld' component={Helloworld}/>
>>>>>>> 5a438ec828dae0036d349d0e2bfdce60d8717a6e
      </Router>
    );
  }
}

export default App;
