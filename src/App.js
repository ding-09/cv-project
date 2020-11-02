import React, { Component } from 'react';
import './App.css';
import BasicInfo from './components/BasicInfo';
import WorkHeading from './layout/WorkHeading';
import AddWorkBtn from './components/AddWorkBtn';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BasicInfo />
        <WorkHeading />
        <AddWorkBtn />
      </div>
    );
  }
}

export default App;
