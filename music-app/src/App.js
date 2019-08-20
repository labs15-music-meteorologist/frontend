import React, { Component } from 'react';
import './App.css';
import ApiRunner from './components/ApiRunner';
import Auth from './components/Auth'; 
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>Hello World!</div>
        <Route exact path='/' component ={Auth} />
        <ApiRunner />
      </Router>
    );
  }
}

export default App;
