import React, { Component } from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';
import WorkHeading from './layout/WorkHeading';
import WorkHist from './components/WorkHist';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BasicInfo />
        <WorkHeading />
        <WorkHist />
    
      </div>
    );
  }
}

export default App;
