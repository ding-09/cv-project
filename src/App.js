import React, { Component } from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';
import WorkHeading from './layout/WorkHeading';
import Modal from './components/Modal';
import WorkHist from './components/WorkHist';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BasicInfo />
        <WorkHeading />
        <Modal />
        <WorkHist />
        
      </div>
    );
  }
}

export default App;
