import React, { Component } from 'react';
import './App.css';
import BasicInfo from './components/GeneralInfo/BasicInfo';
import WorkHist from './components/WorkInfo/WorkHist';
import EducationInfo from './components/EducationInfo/Education';
import WorkHeading from './layout/WorkHeading';
import EducationalHeading from './layout/EducationHeading';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BasicInfo />
        <WorkHeading />
        <WorkHist />
        <EducationalHeading />
        <EducationInfo />
      </div>
    );
  }
}

export default App;
