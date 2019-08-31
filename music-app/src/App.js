import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { MixpanelConsumer } from 'react-mixpanel';

import Auth from './components/Auth';
import LikedSongs from './components/LikedSongs';
import Logout from './components/Logout';
import Info from './components/Info';
import NavBar from './components/NavBar';
import MusicPlayer from './components/MusicPlayer';
import Dashboard from './components/Dashboard.js';
import Footer from './components/Footer.js';

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router history={history}>
          <NavBar />
          {/* <MixpanelConsumer>
            {mixpanel => <ApiRunner mixpanel={mixpanel} />}
            {/* {mixpanel => <LikedSongs {...mixpanel} />} */}
          {/* </MixpanelConsumer> */}
          {/* <Route // Here we need to wrap this route within a <MixpanelConsumer>
            exact
            path='/likedsongs'
            render={props => <LikedSongs {...props} />}
          /> */}
          <Route exact path='/' render={props => <Auth {...props} />} />
          <Route exact path='/logout' component={Logout} />
          <Route exact path='/info' render={props => <Info {...props} />} />
          <Route exact path='/player' component={MusicPlayer} />
          <Route
            exact
            path='/dashboard'
            render={props => <Dashboard {...props} />}
          />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
