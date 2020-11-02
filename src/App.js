import React, { Component } from 'react';
import BasicInfo from './components/BasicInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BasicInfo />
      </div>
    );
  }
}

export default App;
