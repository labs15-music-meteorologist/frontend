import React, { Component } from 'react';
import './App.css';
import { ApiRunner } from './components/ApiRunner';

class App extends Component {
  render() {
    return (
      <>
        <div className='App'>Hello World!</div>
        <ApiRunner />
      </>
    );
  }
}

export default App;
